import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const Bottom = styled.footer`
  display: flex;
  padding: 15px;
  color: ${theme.White};
  align-items: center;
  justify-content: center;
  background-color: ${theme.Slate_Blue};

  a {
    color: ${theme.Red};
    padding-left: 5px;
    :hover {
      text-decoration: underline;
    }
  }
`
