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
