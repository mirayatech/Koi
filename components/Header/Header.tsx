import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/Component.module.css'
import ClickAwayListener from 'react-click-away-listener'

import { IoSearchOutline } from 'react-icons/io5'
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2'
import { HeaderComponent, ToggleButton, Hamburger, Menu } from './style'

import { useState } from 'react'

export default function Header() {
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
          {isMenuOpen ? <HiOutlineXMark /> : <HiBars3 />}
        </ToggleButton>

        {isMenuOpen && (
          <ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>
            <Menu>
              <Link href="/" onClick={handleOnClick}>
                Current Season
              </Link>
              <Link href="/top" onClick={handleOnClick}>
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
