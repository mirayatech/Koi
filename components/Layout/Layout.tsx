import Header from '../Header/Header'
import { Container } from './style'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}
