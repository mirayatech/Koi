import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const HeaderComponent = styled.div`
  margin: auto;
  display: flex;
  padding: 20px 15px;
  max-width: 1300px;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    color: ${theme.White};
  }

  a span {
    padding-left: 5px;
    font-size: calc(18 / 16 * 1rem);
  }

  a:last-child {
    font-size: 1.8rem;
  }
`
