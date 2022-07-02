export interface ISession {
  id: number | undefined;
  name: string
  presenter: string
  duration: number
  level: string
  abstract: string
  voters: string[]
  eventId?: number
}
