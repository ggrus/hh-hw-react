import { ControlProps } from '../shared/interfaces/interfaces'

const Textarea = ({ name, onChange, label, value, ...props }: ControlProps) => {

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  return (
    <div>
      {label && (
        <label className='form-label ' htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        onChange={onChangeHandler}
        value={value}
        className='form-control form-control-textarea'
        id={name}
        name={name}
        {...props}
      ></textarea>
    </div>
  )
}

export default Textarea
