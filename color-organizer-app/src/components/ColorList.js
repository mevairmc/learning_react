import React from 'react'
import Color from './Color'
import StarsRaiting from './StarsRating'


export default function ColorList({colors = []}) {
  return(
    <>
      {colors.map((color,i) => {
        return (
          <div key={i}>
            <Color title={color.title} color={color.color}/>
            <StarsRaiting rating={color.rating} />
          </div>
        )
      })}
    </>
  )
}