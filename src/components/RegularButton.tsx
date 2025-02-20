import React, { MouseEventHandler } from 'react'

type RegularButtonProps = {
  children: React.ReactNode
  handleClick: MouseEventHandler<HTMLButtonElement>
}

export default function RegularButton({
  children,
  handleClick,
}: RegularButtonProps) {
  return (
    <button className="btn btn--text" onClick={handleClick}>
      {children}
    </button>
  )
}
