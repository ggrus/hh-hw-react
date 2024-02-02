import { PropsWithChildren } from 'react'

interface ButtonProps extends PropsWithChildren {
  disabled: boolean
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className='btn btn-primary' {...props}>
      {children}
    </button>
  )
}

export default Button
