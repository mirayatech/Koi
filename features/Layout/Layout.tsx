import { Footer, Header, Navbar } from '..'
import { Container } from './style'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}
