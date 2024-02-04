import { SettingsFormActionTypes } from './settingsFormActionTypes'

export const setLogin = (user: string) => ({
  type: SettingsFormActionTypes.SET_LOGIN,
  payload: user,
})

export const setRepo = (repo: string) => ({
  type: SettingsFormActionTypes.SET_REPO,
  payload: repo,
})

export const setBlacklist = (blacklist: string) => ({
  type: SettingsFormActionTypes.SET_BLACKLIST,
  payload: blacklist,
})
