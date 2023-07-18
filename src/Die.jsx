import { useState } from 'react'
import './dice.css'

function getRandomNum(upperLimit) {
  return Math.ceil(Math.random() * upperLimit)
}

export default function Die(props) {
  const [rolledNum, setRolledNum] = useState('?')

  const roll = () => {
    const result = getRandomNum(props.sides)
    setRolledNum(result)
  }

  return (
    <button type='button' className='die' onClick={roll}>
      <i>sides={props.sides}</i>
      <b>{rolledNum}</b>
    </button>
  )
}
