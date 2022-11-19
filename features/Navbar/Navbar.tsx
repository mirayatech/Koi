import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'
import { Nav } from './style'

export function Navbar() {
  const router = useRouter()
  return (
    <Nav>
      <Link href="/" className={router.pathname == '/' ? styles.active : ''}>
        Current Season
      </Link>
      <Link
        href="/top"
        className={router.pathname == '/top-animes' ? styles.active : ''}
      >
        Top Anime
      </Link>
    </Nav>
  )
}
