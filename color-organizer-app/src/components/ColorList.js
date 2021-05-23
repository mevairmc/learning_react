import React from 'react'
import Color from './Color'
import StarsRaiting from './StarsRating'


export default function ColorList({colors = []}) {
  if(!colors.length) return <div>No Colors Listed.</div>;
  return(
    <>
      {colors.map((color) => {
        return (
          <div key={color.id}>
            <Color title={color.title} color={color.color}/>
            <StarsRaiting rating={color.rating} />
          </div>
        )
      })}
    </>
  )
}