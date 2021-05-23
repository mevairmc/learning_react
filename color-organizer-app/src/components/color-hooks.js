import React, { createContext, useContext, useState } from "react";
import colorData from "../data/ColorList.json";
import {v4} from "uuid";


// Create a context for colors
const ColorContext = createContext();

export const useColors = () => useContext(ColorContext);

export function ColorProvider ({ children }) {
  const [colors, setColors] = useState(colorData);

  //Add a new color
  const addColor = (title, color) =>
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color
      }
    ]);

  //Change the current rate of a color
  const rateColor = (id, rating) =>
    setColors(
      colors.map(color => (color.id === id ? { ...color, rating } : color))
    );

  // remove color from the list
  const removeColor = id => setColors(colors.filter(color => color.id !== id));

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
};