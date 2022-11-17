import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const Nav = styled.nav`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.Slate_Blue};

  a {
    color: ${theme.White};
    padding: 0 30px;
  }

  @media screen and (max-width: 748px) {
    display: none;
  }
`
