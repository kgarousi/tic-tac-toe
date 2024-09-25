import React from 'react'

export default function Square({value, onSquareClick}) {
  return (
    <button className="square" type="submit" onClick={onSquareClick}>{value}</button>
  )
}
