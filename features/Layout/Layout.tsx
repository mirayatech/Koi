import { Header } from '../Header/Header'
import { Navbar } from '../Navbar/Navbar'
import { Container } from './style'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}
