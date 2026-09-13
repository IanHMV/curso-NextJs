
'use client'

import React, { useState } from 'react'

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);

  function handleClick(increment: boolean) {
    if (increment) {
      setCounter(counter + 1)
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <span className='text-9xl'>{counter}</span>

      <div className='flex '>
        <button className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2' onClick={() => handleClick(true)} >
          +1
        </button>

        <button className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2' onClick={() => handleClick(false)} >
          -1
        </button>
      </div>
    </>
  )
}

