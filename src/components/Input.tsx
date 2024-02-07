import React from 'react'

import { ControlProps } from '../shared/interfaces/interfaces'

const Input = ({ name, onChange, label, value, ...props }: ControlProps) => {

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className='mb3'>
      {label && (
        <label className={`form-label`} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        onChange={onChangeHandler}
        value={value}
        className='form-control'
        id={name}
        name={name}
        {...props}
      />
    </div>
  )
}

export default Input
