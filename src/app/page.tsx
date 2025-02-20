'use client'

import Form from '@/components/Form'
import MemoryCard from '@/components/MemoryCard'
import React, { useState } from 'react'

export default function Page() {
  const [isGameOn, setIsGameOn] = useState(false)

  function startGame(e: React.FormEvent) {
    e.preventDefault()
    setIsGameOn(true)
  }

  function turnCard() {
    console.log('Memory card clicked')
  }

  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard handleClick={turnCard} />}
    </main>
  )
}
