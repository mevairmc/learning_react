import React from 'react'
import Star from './Star'

const createArray = length => [...Array(length)] // create a array with undefined elements.

export default function StarRating({ totalStar = 5 }){
  return createArray(totalStar).map((n,i)=> <Star key={i} />)
}