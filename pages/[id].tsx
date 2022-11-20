/* eslint-disable @next/next/no-img-element */
import { BsDot, BsPlayFill } from 'react-icons/bs'
import { TiHeart } from 'react-icons/ti'
import styles from '../styles/Anime.module.css'
import { AnimeType } from '../library'
import {
  AnimeInfo,
  PrimaryContainer,
  Section,
  Genre,
  Status,
  Relative,
  Poster,
  SecondaryContainer,
  MobileButton,
} from '../styles/AnimeStyle'

type AnimeProps = {
  anime: AnimeType
}
export default function Anime({ anime }: AnimeProps) {
  const PERCENTAGE = anime?.score
  const SCORE = Math.floor((PERCENTAGE as number) * 10)

  return (
    <Section>
      <PrimaryContainer>
        <Relative>
          <Poster>
            <img src={anime.images.webp.large_image_url} alt="" />
          </Poster>
          <div className={styles.PosterOverlay}>
            <button aria-label="watch trailer">
              <BsPlayFill />
            </button>
          </div>
        </Relative>

        <AnimeInfo>
          <p>
            <span>
              {anime.type} <BsDot className="dot__svg" />
            </span>

            <span>{anime.rating}</span>
          </p>
          <h1>{anime.title}</h1>
          <Genre>
            {anime.genres.map((genre) => (
              <li key={genre.mal_id}>{genre.name}</li>
            ))}
            {anime.themes.map((theme) => (
              <li key={theme.mal_id}>{theme.name}</li>
            ))}
          </Genre>
          <Status>
            <p>Status</p>

            <ul>
              <li>{anime?.status}</li>
              <li>{anime?.year}</li>
              <li>{SCORE}&#37;</li>
              <li>
                <TiHeart className="heart__svg" /> {anime.favorites}
              </li>
            </ul>
          </Status>{' '}
          <MobileButton aria-label="watch trailer">
            <BsPlayFill className="play__svg" /> Watch Trailer
          </MobileButton>
        </AnimeInfo>
      </PrimaryContainer>

      <SecondaryContainer>
        <h2>Synopsis</h2>
        <p>{anime.synopsis}</p>
      </SecondaryContainer>
    </Section>
  )
}

export const getServerSideProps = async (context: any) => {
  const { id } = context.query
  const res = await fetch('https://api.jikan.moe/v4/' + `anime/${id}`)
  const anime = await res.json()

  return {
    props: { anime: anime.data },
  }
}
