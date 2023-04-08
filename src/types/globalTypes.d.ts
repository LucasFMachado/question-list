export type ServerStatus = 'UP' | 'DOWN'

export interface IChoise {
  choice: string
  votes: number
}

export interface IQuestion {
  id: string
  question: string
  image_url: string
  thumb_url: string
  published_at: Date
  choices: IChoise[]
}
