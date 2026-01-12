import styled from "@emotion/styled"
import Image from "next/image"
import React from "react"
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="title">
        <Emoji></Emoji> Profile
      </div>
      <div className="content">
        {/* 기술 스택 뱃지 영역 */}
        <div className="top">
          <img 
            src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white" 
            alt="Oracle" 
          />
          <img 
            src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" 
            alt="PostgreSQL" 
          />
          <img 
            src="https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white" 
            alt="MSSQL" 
          />
        </div>
        
        <div className="mid">
          <div className="name">{CONFIG.profile.name}</div>
          <div className="role">{CONFIG.profile.role}</div>
          <div className="text-sm mb-2">{CONFIG.profile.bio}</div>
          <div className="email">
            {CONFIG.profile.email && (
              <a
                href={`mailto:${CONFIG.profile.email}`}
                rel="noreferrer"
                target="_blank"
                css={{ overflow: "hidden" }}
              >
                <AiOutlineMail className="icon" />
                <div className="name">{CONFIG.profile.email}</div>
              </a>
            )}
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default ProfileCard

const StyledWrapper = styled.div`
  > .title {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .content {
    margin-bottom: 2.25rem;
    border-radius: 1rem;
    width: 100%;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4};
    @media (min-width: 768px) {
      padding: 1rem;
    }
    @media (min-width: 1024px) {
      padding: 1rem;
    }
    
    .top {
      display: flex;
      flex-wrap: wrap;
      justify-content: center; /* 뱃지들을 중앙 정렬 */
      gap: 6px;
      margin-bottom: 12px;
      
      /* 모든 뱃지 이미지의 높이를 여기서 한 번에 고정합니다 */
      img {
        height: 28px;
        width: auto;
      }

      /* 기존 정사각형 유지용 코드는 이제 필요 없으므로 제거하거나 무시됩니다 */
    }

    .mid {
      display: flex;
      padding: 0.5rem;
      flex-direction: column;
      align-items: center;
      .name {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-style: italic;
        font-weight: 700;
      }
      .role {
        margin-bottom: 1rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: ${({ theme }) => theme.colors.gray11};
      }
      .email {
        width: 100%;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          color: ${({ theme }) => theme.colors.gray11};
          .icon {
            flex-shrink: 0;
          }
          .name {
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
          }
        }
      }
    }
  }
`
