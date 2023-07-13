export interface GameDTO {
  id: number
  title: string
  thumbnail: string
  rate?: number
  favorite?: boolean
  short_description: string
  developer: string
  game_url: string
  genre: string
}
