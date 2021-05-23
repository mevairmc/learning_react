import React, {useState} from "react";
import { render } from "react-dom";
import ColorList from "./components/ColorList";
import data from "./data/ColorList.json";


function App() {
  const [colors, setColors] = useState(data)
  return(
    <ColorList
      colors={colors}
      onRateColor={(id, rating) => {
        const newColors = colors.map(color =>
          color.id === id ? { ...color, rating } : color //if is found only update the rating, all rest of parameters keeping same
        );
        setColors(newColors);
      }}
      onRemoveColor={id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
      }}
    />
  ) // proof destructuring
}

// Render App component
render(<App />, document.getElementById("root"));