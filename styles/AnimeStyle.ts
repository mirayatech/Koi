import styled from '@emotion/styled'
import { theme } from './theme'

export const CloseButton = styled.button`
  top: 30px;
  right: 30px;
  border: none;
  color: ${theme.White};
  font-size: 2rem;
  position: absolute;
  background-color: transparent;
`

export const Overlay = styled.div`
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: #00000001;
  backdrop-filter: blur(5px);
`

export const Video = styled.iframe`
  width: 70%;
  height: 70%;
  border-radius: 10px;
`

export const Section = styled.div`
  display: flex;
  margin: 50px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 748px) {
    margin: 60px 0 50px 0;
    padding: 30px;
  }
`

export const PrimaryContainer = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  max-width: 650px;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.Slate_Blue};

  @media screen and (max-width: 748px) {
    flex-direction: column;
  }
`

export const Relative = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  button {
    border: none;
    display: flex;
    padding: 20px;
    font-size: 2rem;
    font-weight: 600;
    border-radius: 50%;
    align-items: center;
    color: ${theme.White};
    background-color: transparent;
    border: 1px solid ${theme.White};
    transition: all 0.3s ease;
    :hover {
      background-color: rgba(255, 255, 255, 0.172);
    }
    @media screen and (max-width: 748px) {
      display: none;
    }
  }
`

export const Poster = styled.div`
  width: 17rem;
  height: 25rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 430px) {
    width: 15rem;
    height: 22rem;
  }
`

export const AnimeInfo = styled.div`
  margin-left: 30px;
  p {
    display: flex;

    span {
      color: ${theme.White};
      display: flex;
      align-items: center;
      font-size: calc(14 / 16 * 1rem);

      :first-of-type {
        font-weight: bold;
      }
      :last-child {
        font-weight: 300;
      }
    }
  }

  h1 {
    padding: 15px 0;
    font-weight: 600;
    color: ${theme.White};
    text-transform: uppercase;
    font-size: calc(28 / 16 * 1rem);
    @media screen and (max-width: 430px) {
      font-size: calc(22 / 16 * 1rem);
    }
  }

  @media screen and (max-width: 748px) {
    margin-top: 30px;
    margin-left: 0;
  }
`

export const Genre = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-bottom: 30px;
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

export const Status = styled.div`
  p {
    color: ${theme.White};
    padding-bottom: 10px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-bottom: 30px;

    @media screen and (max-width: 748px) {
      padding-bottom: 0;
    }
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

    :first-of-type {
      background-color: ${theme.Blue};
    }

    :nth-child(2) {
      background-color: ${theme.Yellow};
    }
    :nth-child(3) {
      background-color: ${theme.Green};
    }
    :last-child {
      background-color: ${theme.Red};
      .heart__svg {
        margin-right: 2px;
        align-self: baseline;
        font-size: calc(16 / 16 * 1rem);
      }
    }
  }
`

export const SecondaryContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 30px;
  max-width: 650px;
  margin-top: 50px;
  flex-direction: column;
  border: 1px solid ${theme.Slate_Blue};

  h2 {
    margin-bottom: 20px;
    color: ${theme.White};
    font-size: calc(24 / 16 * 1rem);
  }
  p {
    line-height: 2;
    color: #d4d4d4;
  }

  @media screen and (max-width: 430px) {
    h2 {
      font-size: calc(20 / 16 * 1rem);
    }
    p {
      font-size: 0.9rem;
    }
  }
`

export const MobileButton = styled.button`
  border: none;
  display: flex;
  padding: 10px;
  font-weight: 600;
  margin-top: 30px;
  border-radius: 3px;
  align-items: center;
  font-size: 0.92rem;

  .play__svg {
    font-size: 1rem;
    margin-right: 3px;
  }
  @media screen and (min-width: 748px) {
    display: none;
  }
`
