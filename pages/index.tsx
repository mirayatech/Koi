/* eslint-disable react/jsx-key */
import Head from 'next/head'
import { AnimeCard } from '../features'
import { AnimeType, CURRENT_SEASON_URL } from '../library'
import styles from '../styles/Home.module.css'

export type HomeProps = {
  animes: AnimeType[]
}

export default function Home({ animes }: HomeProps) {
  return (
    <div className={styles.grid}>
      <Head>
        <title>Koi</title>
        <meta
          name="description"
          content="Watch good anime at Koi, fast updates, no ads and many interesting features"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {animes.map((anime) => (
        <AnimeCard anime={anime} key={anime.mal_id} />
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(CURRENT_SEASON_URL)
  const animes = await res.json()

  return {
    props: {
      animes: animes.data,
    },
  }
}
