import React, { useContext } from 'react'
import Color from './Color'
import { useColors } from "./color-hooks";

export default function ColorList(){
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
  const { colors } = useColors();

  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
  return (
    <div className="color-list">
      {
        colors.map(color => <Color key={color.id} {...color} />)
      }
    </div>
  );
}