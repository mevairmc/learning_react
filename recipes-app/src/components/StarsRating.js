import React, { useState } from 'react'
import Star from './Star'

const createArray = length => [...Array(length)] // create a array with undefined elements.

export default function StarRating({ totalStar = 5 }){
  const [selectedStars] = useState(3)

  return (
    <>
      {createArray(totalStar).map((n,i)=>
        <Star key={i} selected={selectedStars > i } />
      )}
      <p>{selectedStars} of {totalStar} stars</p>
    </>
  )
}