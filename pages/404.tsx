import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { theme } from '../styles/theme'

export default function NotFound() {
  return (
    <Container>
      <Card>
        <Image src="/demon-slayer.gif" alt="" width={100} height={100} />

        <h1>404 | This page could not be found.</h1>
        <Link href="/">Go Home</Link>
      </Card>
    </Container>
  )
}

const Container = styled.div`
  height: 94vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Card = styled.div`
  padding: 30px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img {
    margin-bottom: 20px;
  }

  h1 {
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 20px;
    color: ${theme.White};
  }

  a {
    border-radius: 2px;
    padding: 5px 10px;
    color: ${theme.White};
    background-color: ${theme.Blue};
  }
`
