import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const HeaderComponent = styled.div`
  margin: auto;
  display: flex;
  max-width: 1300px;
  padding: 20px;
  align-items: baseline;
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

  @media screen and (max-width: 748px) {
    width: 100%;
    z-index: 100;
    position: fixed;
    -webkit-backdrop-filter: blur(5px);
  }
`

export const Hamburger = styled.div`
  display: none;
  position: relative;
  @media screen and (max-width: 748px) {
    display: flex;
  }
`

export const ToggleButton = styled.button`
  display: flex;
  border: none;
  font-size: 2rem;
  padding-left: 30px;
  color: ${theme.White};
  background-color: transparent;
`

export const Menu = styled.div`
  top: 38px;
  z-index: 0;
  width: 101.5vw;
  right: -30px;
  position: absolute;
  background-color: ${theme.Slate_Blue};
  a {
    padding: 20px;
    text-align: center;
  }
  a:not(:last-child) {
    border-bottom: 1px solid ${theme.Tag_Blue};
  }
`
