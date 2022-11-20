import Link from 'next/link'
import React from 'react'
import { Bottom } from './style'

export function Footer() {
  return (
    <Bottom>
      <span>
        Developed & Designed by
        <Link href="https://github.com/mirayatech/Koi" target="_blank">
          Miraya
        </Link>
      </span>
    </Bottom>
  )
}
