import Link from 'next/link'
import Image from 'next/image'

import ClickAwayListener from 'react-click-away-listener'

import { IoSearchOutline } from 'react-icons/io5'
import { HeaderComponent, ToggleButton, Hamburger, Menu } from './style'

import { useState } from 'react'

import styles from './Header.module.css'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOnClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <HeaderComponent>
      <Link href="/">
        <Image src="/favicon.ico" alt="" width={30} height={30} />
        <span>KOI</span>
      </Link>

      <Link
        href="/search"
        aria-label="search"
        className={styles.header__search}
      >
        <IoSearchOutline />
      </Link>
      <Hamburger>
        <ToggleButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <input className={styles.checkbox} type="checkbox" />
          <div className={styles.hamburger_lines}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>{' '}
        </ToggleButton>

        {isMenuOpen && (
          <ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>
            <Menu>
              <Link href="/" onClick={handleOnClick}>
                Current Season
              </Link>
              <Link href="/top-animes" onClick={handleOnClick}>
                Top Anime
              </Link>
              <Link href="/search" onClick={handleOnClick}>
                Search
              </Link>
            </Menu>
          </ClickAwayListener>
        )}
      </Hamburger>
    </HeaderComponent>
  )
}
