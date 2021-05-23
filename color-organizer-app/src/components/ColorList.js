import React, { useContext } from 'react'
import Color from './Color'
import { ColorContext } from "./";


export default function ColorList({colors = [], onRemoveColor = f => f , onRateColor = g => g }){
  /*if(!colors.length) return <div>No Colors Listed.</div>;

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
      );*/
  return (
    <ColorContext.Consumer>
      {context => {
        if (!context.colors.length)
          return <div>No Colors Listed. (Add a Color)</div>;
        return (
          <div className="color-list">
            {
              context.colors.map(color =>
                <Color key={color.id} {...color} />)
            }
          </div>
        )
      }}
    </ColorContext.Consumer>
  )
}