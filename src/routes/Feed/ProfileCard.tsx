import styled from "@emotion/styled"
import Image from "next/image"
import React from "react"
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
        {/*<div className="top">
         <Image src={CONFIG.profile.image} fill alt="" />
        </div>*/}
        <div className="top" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px', height: '28px' }}>
          {/* Oracle */}
          <img src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white" alt="Oracle" />
          {/* PostgreSQL (PG) */}
          <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
          {/* MSSQL */}
          <img src="https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white" alt="MSSQL" />
          {/* EX <img src="https://img.shields.io/badge/이름-색상코드?style=for-the-badge&logo=아이콘명&logoColor=white" /> */}
        </div>
        <div className="mid">
          <div className=" name">{CONFIG.profile.name}</div>
          <div className="role">{CONFIG.profile.role}</div>
          <div className="text-sm mb-2">{CONFIG.profile.bio}</div>
          <div className="email">{CONFIG.profile.email && (
            <a
              href={`mailto:${CONFIG.profile.email}`}
              rel="noreferrer"
              target="_blank"
              css={{ overflow: "hidden" }}
            >
              <AiOutlineMail className="icon" />
              <div className="name">saham7532@naver.com</div>
            </a>
        )}</div>
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
      position: relative;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 12px;
      /* &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      } */
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
      .bio {
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    }
  }
`
