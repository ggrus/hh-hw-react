import { RootState } from '../store'

export const getSettingsFormLogin = (state: RootState) =>
  state.SettingsForm.login

export const getSettingsFormRepo = (state: RootState) =>
  state.SettingsForm.repo

export const getSettingsFormBlacklist = (state: RootState) =>
  state.SettingsForm.blacklist