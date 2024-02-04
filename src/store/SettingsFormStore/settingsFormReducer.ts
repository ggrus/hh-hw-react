import { SettingsFormActionTypes } from './settingsFormActionTypes'

const initialState = {
  login: '',
  repo: '',
  blacklist: '',
}

interface SettingsAction {
  type: string
  payload: string
}

export function SettingsFormReducer(
  state = initialState,
  action: SettingsAction
) {
  switch (action.type) {
    case SettingsFormActionTypes.SET_LOGIN:
      return { ...state, login: action.payload }
    case SettingsFormActionTypes.SET_REPO:
      return { ...state, repo: action.payload }
    case SettingsFormActionTypes.SET_BLACKLIST:
      return { ...state, blacklist: action.payload }
    default:
      return state
  }
}
