import React from 'react'
import StarsRating from './StarsRating'

export default function Color({ title, color, rating }) {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarsRating selectedStars={rating} />
    </section>
  );
}