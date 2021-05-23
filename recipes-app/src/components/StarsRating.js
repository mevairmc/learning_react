import React, { useState } from 'react'
import Star from './Star'

const createArray = length => [...Array(length)] // create a array with undefined elements.

export default function StarRating({style={}, totalStar = 5 , ...props}){
  const [selectedStars, setSelectedStars] = useState(3)

  // why can I not separate arrow function in other function

  return (
    <div style={{padding: "5px", ...style }} > {/*we upgrade react fragment to div to use styles*/}
      {createArray(totalStar).map((n,i)=>
        <Star
          key={i}
          selected={selectedStars > i }
          onSelect={() =>setSelectedStars(i+1)}
        />
      )}
      <p>{selectedStars} of {totalStar} stars</p>
    </div>
  )
}