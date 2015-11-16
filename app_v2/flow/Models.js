type Todo = {
  text: string,
  completed: boolean
}

type Pomodoro = {
  startedAt: string,
  type: string,
  minutes: number,
}

type PomodoroType = string

type Settings = {
  tickSoundEnabled: boolean,
  ringSoundEnabled: boolean,
}

type User = {
  _id: string,
  apikey: string,
  id: number,
  avatar: string,
  username: string
}
