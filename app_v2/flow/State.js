type SimpleState = Array<any>

type PomodoroState = ?Pomodoro

type TimerState = string
type TodoState = Array<Todo>

type SettingsState = Settings

type UserState = {
  _id:      string,
  apikey:   string,
  id:       number,
  avatar:   string,
  username: string
}
