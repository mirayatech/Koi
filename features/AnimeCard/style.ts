import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const Card = styled.div`
  padding: 10px;
  border-radius: 2px;
  transition: all 0.2s ease;

  :hover {
    background-color: ${theme.Slate_Blue};
  }

  h1 {
    width: 16rem;
    font-weight: 500;
    padding-top: 15px;
    letter-spacing: 1px;
    word-wrap: break-word;
    color: ${theme.White};
    text-transform: uppercase;
    font-size: calc(18 / 16 * 1rem);
  }

  p {
    display: flex;
    margin: 15px 0;
    align-items: center;
    color: ${theme.White};
    font-size: calc(14 / 16 * 1rem);
  }

  ul {
    width: 16rem;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  li {
    display: flex;
    font-weight: 400;
    padding: 2px 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 2px;
    align-items: center;
    color: ${theme.White};
    font-size: calc(12 / 16 * 1rem);
    background-color: ${theme.Tag_Blue};
  }
`

export const Poster = styled.div`
  width: 16rem;
  height: 25rem;

  img {
    border-radius: 2px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
