import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const HeaderComponent = styled.div`
  margin: auto;
  display: flex;
  padding: 20px;
  max-width: 1300px;
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
    backdrop-filter: blur(8px);
    background-color: #0f172a56;
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
  position: relative;
  color: ${theme.White};
`

export const Menu = styled.div`
  top: 20px;
  z-index: 0;
  right: -30px;
  width: 101.5vw;
  position: absolute;
  background-color: ${theme.Slate_Blue};
  a {
    padding: 20px 40px;
    text-align: center;
  }
  a:not(:last-child) {
    border-bottom: 1px solid ${theme.Tag_Blue};
  }
`
