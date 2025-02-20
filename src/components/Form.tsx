import { MouseEventHandler } from 'react'
import RegularButton from './RegularButton'

type FormProps = {
  handleSubmit: MouseEventHandler<HTMLButtonElement>
}

export default function Form({ handleSubmit }: FormProps) {
  return (
    <form className="wrapper">
      <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
    </form>
  )
}
