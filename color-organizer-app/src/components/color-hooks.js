import React, { createContext, useContext, useState } from "react";
import colorData from "../data/ColorList.json";
import {v4} from "uuid";

const ColorContext = createContext();

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue)
  return [
    { value,
      onChange: event => setValue(event.target.value) },
    () => setValue(initialValue)
  ];
}

export const useColors = () => useContext(ColorContext);

export function ColorProvider ({ children }) {
  const [colors, setColors] = useState(colorData);

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

  const rateColor = (id, rating) =>
    setColors(
      colors.map(color => (color.id === id ? { ...color, rating } : color))
    );

  const removeColor = id => setColors(colors.filter(color => color.id !== id));

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
};