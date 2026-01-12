import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      {CONFIG.blog.title}
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
/* 굵기 설정 */
  font-weight: 700; 
  
  /* 글씨체 설정: 시스템에서 제공하는 예쁜 고딕체 위주 */
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  
  /* 추가적인 스타일링 (선택 사항) */
  font-size: 1.25rem;       /* 크기를 살짝 키움 */
  letter-spacing: -0.02em;  /* 자간을 좁혀서 세련되게 */
  text-decoration: none;    /* 링크 밑줄 제거 */
  color: inherit;           /* 부모 컬러 상속 */
`
