import { useEffect, useState } from 'react'
import Button from './Button'
import Input from './Input'
import Textarea from './Textarea'
import { LS_SETTINGS_KEY } from '../config'
import { getSettingsFromLocalStorage } from '../shared/helpers/helper'
import { Settings } from '../shared/interfaces/interfaces'
import arrow from '../assets/arrow.svg'

interface SettingsFormProps {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onSubmit: (value: any) => void
  loading: boolean
}

const SettingsForm = ({ onSubmit, loading }: SettingsFormProps) => {
  const [isShow, setIsShow] = useState(true)
  const [repo, setRepo] = useState('')
  const [login, setLogin] = useState('')
  const [blacklist, setBlacklist] = useState('')

  useEffect(() => {
    const settings = getSettingsFromLocalStorage(LS_SETTINGS_KEY) as Settings

    setRepo(settings?.repo)
    setLogin(settings?.login)
    setBlacklist(settings?.blacklist)
  }, [])

  const onShowClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsShow(!isShow)
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.target as HTMLFormElement)
    const formObject = Object.fromEntries(data.entries())
    onSubmit(formObject)
  }

  return (
    <div className='panel'>
      <form onSubmit={onSubmitHandler}>
        <div className='panel-header'>
          <Button disabled={loading}>Find</Button>
          <button
            className={`panel-button ${!isShow ? 'open' : ''}`}
            onClick={onShowClick}
          >
            <img src={arrow} alt='arrow' />
          </button>
        </div>
        {isShow && (
          <div className='panel-main'>
            <Input
              name='login'
              label='Type login:'
              placeholder='Type login...'
              onChange={setLogin}
              value={login}
            />
            <Input
              name='repo'
              label='Type repository name:'
              placeholder='Type repository name...'
              onChange={setRepo}
              value={repo}
            />
            <Textarea
              name='blacklist'
              label='Blocked user separated by space:'
              placeholder='Type blocked user separated by space...'
              onChange={setBlacklist}
              value={blacklist}
            />
          </div>
        )}
      </form>
    </div>
  )
}

export default SettingsForm
