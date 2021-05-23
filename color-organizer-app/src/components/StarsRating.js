import React, { useState } from 'react'
import Star from './Star'

const createArray = length => [...Array(length)] // create a array with undefined elements.

export default function StarRating({ rating, totalStar = 5 , selectedStars = 0, onRate = f => f}){


  // why can I not separate arrow function in other function

  return (
    <div style={{padding: "5px"}}  > {/*we upgrade react fragment to div to use styles*/}
      {createArray(totalStar).map((n,i)=>
        <Star
          key={i}
          selected={selectedStars > i }
          onSelect={() => onRate(i + 1)} // onRate is not executed until I click in onSelect
        />
      )}
      <p>{selectedStars} of {totalStar} stars</p>
    </div>
  )
}