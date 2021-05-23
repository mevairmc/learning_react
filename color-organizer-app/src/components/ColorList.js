import React from 'react'
import Color from './Color'



export default function ColorList({colors = [], onRemoveColor = f => f , onRateColor = g => g }){
  if(!colors.length) return <div>No Colors Listed.</div>;

  return (
        <div>
          {
            colors.map(color => (
              <Color
                key={color.id}
                {...color}
                onRemove={onRemoveColor} //pass the function to his child
                onRate={onRateColor}
              />
            ))
          }
        </div>
      );

}