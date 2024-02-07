import { PropsWithChildren } from "react"

export interface ControlProps extends PropsWithChildren {
  name?: string
  label?: string
  value?: string
  placeholder?: string
  onChange: (value: string) => void
}

export interface contributorData {
  avatar_url: string
  html_url: string
  login: string
}

export interface Settings {
  login: string
  repo: string
  blacklist: string
}
