import Link from 'next/link'
import Image from 'next/image'
import { HeaderComponent } from './style'
import { IoSearchOutline } from 'react-icons/io5'

export default function Header() {
  return (
    <HeaderComponent>
      <Link href="/">
        <Image src="/favicon.ico" alt="" width={30} height={30} />
        <span>KOI</span>
      </Link>

      <Link href="/search" aria-label="search">
        <IoSearchOutline />
      </Link>
    </HeaderComponent>
  )
}
