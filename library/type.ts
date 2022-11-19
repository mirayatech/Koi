export type AnimeType = {
  duration: string
  episodes: number
  season: string
  type: string
  year: number
  title: string
  mal_id: string
  title_japanese: string
  favorites: number
  score: number
  synopsis: string
  status: string

  studios: [{ name: string; mal_id: number }]
  genres: [
    {
      mal_id: number
      name: string
    }
  ]

  demographics: [{ mal_id: number; name: string }]

  themes: [
    {
      mal_id: number
      name: string
    }
  ]

  images: {
    jpg: {
      large_image_url: string
    }
    webp: {
      large_image_url: string
    }
  }

  trailer: {
    embed_url: string
    images: {
      maximum_image_url: string
    }
    youtube_id: string
  }
}
