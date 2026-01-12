import NavBar from "./NavBar"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"
import styled from "@emotion/styled"
import { zIndexes } from "src/styles/zIndexes"

type Props = {
  fullWidth: boolean
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  return (
    <StyledWrapper>
      <div data-full-width={fullWidth} className="container">
        <Logo />
        <ThemeToggle />
       {/* <div className="nav">
        <ThemeToggle />
        <NavBar />
       </div> 
      */}
      </div>
    </StyledWrapper>
  )
}

export default Header

const StyledWrapper = styled.div`
  z-index: ${zIndexes.header};
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.gray2};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
    /* 1. max-width를 100%로 변경하여 모니터 끝까지 확장 */
    max-width: 100%; 
    
    height: 3rem;
    margin: 0 auto;
    
    /* 2. 양 끝에 너무 붙지 않도록 적절한 기본 패딩 유지 */
    padding-left: 1rem;
    padding-right: 1rem;

    /* fullWidth 옵션이 true일 때만 더 넓은 패딩 적용 */
    &[data-full-width="true"] {
      @media (min-width: 768px) {
        padding-left: 2rem; /* 혹은 원하시는 만큼 늘려주세요 */
        padding-right: 2rem;
      }
    }
    .nav {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }
  }
`
