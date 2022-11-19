/* eslint-disable @next/next/no-img-element */
import { AnimeType } from '../../library'
import { BsDot } from 'react-icons/bs'
import { Card, Poster } from './style'
import Link from 'next/link'

import styles from './AnimeCard.module.css'

export type AnimeCardProps = {
  anime: AnimeType
}

export function AnimeCard({ anime }: AnimeCardProps) {
  const season = anime.season
  const season2 = season.charAt(0).toUpperCase() + season.slice(1)

  return (
    <Card>
      <Poster>
        <Link href={`/${anime.mal_id}`} className={styles.animeLink}>
          <img src={anime.images.webp.large_image_url} alt="" />
        </Link>
      </Poster>

      <Link href={`/${anime.mal_id}`} className={styles.animeLink}>
        {anime.title}
      </Link>
      <p>
        <span>{season2}</span> <BsDot className="dot__svg" />
        <span>{anime.status}</span>
      </p>

      <ul>
        {anime.genres.map((genre) => (
          <li key={genre.mal_id}>{genre.name}</li>
        ))}
        {anime.themes.map((theme) => (
          <li key={theme.mal_id}>{theme.name}</li>
        ))}
      </ul>
    </Card>
  )
}
