import { getTextContent, getDateValue } from "notion-utils"
import { NotionAPI } from "notion-client"
import { BlockMap, CollectionPropertySchemaMap } from "notion-types"
import { customMapImageUrl } from "./customMapImageUrl"

async function getPageProperties(
  id: string,
  block: BlockMap,
  schema: CollectionPropertySchemaMap
) {
  const api = new NotionAPI()
  const rawProperties = Object.entries(block?.[id]?.value?.properties || [])
  const customTypes = ["date", "select", "multi_select", "person", "file", "formula", "relation", "checkbox", "rollup"]
  const properties: any = { id }

  for (const [key, val] of rawProperties) {
    const type = schema[key]?.type
    const name = schema[key]?.name

    if (type && !customTypes.includes(type)) {
      properties[name] = getTextContent(val as any)
      continue
    }

    switch (type) {
      case "checkbox":
        properties[name] = getTextContent(val as any) === "Yes"
        break
      case "file": {
        try {
          const Block = block?.[id].value
          const url: string = (val as any)[0][1][0][1]
          const newurl = customMapImageUrl(url, Block)
          properties[name] = newurl
        } catch (error) {
          properties[name] = undefined
        }
        break
      }
      case "date": {
        const dateProperty: any = getDateValue(val as any)
        if (dateProperty) delete dateProperty.type
        properties[name] = dateProperty
        break
      }
      case "select":
      case "multi_select": {
        const selects = getTextContent(val as any)
        if (selects?.length) {
          properties[name] = selects.split(",").map(s => s.trim())
        }
        break
      }
      case "formula": {
        // 수식 결과가 문자열인 경우와 숫자인 경우를 모두 대응합니다.
        const formulaValue = (val as any)[0]?.[0]
        properties[name] = formulaValue || ""
        break
      }
      case "rollup": {
        // 롤업 데이터에서 텍스트 내용만 추출합니다.
        // 관계형으로 가져온 여러 개의 값을 쉼표로 구분된 문자열로 변환하거나 배열로 저장할 수 있습니다.
        const rollupContent = getTextContent(val as any)
        if (rollupContent) {
          // 만약 롤업 결과가 여러 개라면 배열로 만듭니다 (예: "Oracle, TIBERO" -> ["Oracle", "TIBERO"])
          properties[name] = rollupContent.split(",").map((s) => s.trim())
        } else {
          properties[name] = []
        }
        break
      }
      case "relation": {
        // 관계형 페이지의 제목들을 배열로 추출합니다.
        const relations = (val as any)
          .filter((item: any) => item[0] !== ",")
          .map((item: any) => item[1]?.[0]?.[0] || item[0])
          .filter(Boolean)
        properties[name] = relations
        break
      }
      case "person": {
        const rawUsers = (val as any).flat()
        const users = []
        for (let i = 0; i < rawUsers.length; i++) {
          if (rawUsers[i][0][1]) {
            const userId = rawUsers[i][0]
            const res: any = await api.getUsers(userId)
            const resValue = res?.recordMapWithRoles?.notion_user?.[userId[1]]?.value
            const user = {
              id: resValue?.id,
              name: resValue?.name || `${resValue?.family_name}${resValue?.given_name}` || undefined,
              profile_photo: resValue?.profile_photo || null,
            }
            users.push(user)
          }
        }
        properties[name] = users
        break
      }
      default:
        break
    }
  }
  return properties
}

export { getPageProperties as default }
