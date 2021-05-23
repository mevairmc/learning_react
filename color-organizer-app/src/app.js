import React from "react";
import { render } from "react-dom";
import { ColorProvider } from "./components/color-hooks";
import AddColorForm from "./components/AddColorForm";
import ColorList from "./components/ColorList";


function App() {
  return(
    <>
      <AddColorForm />
      <ColorList />
    </>
  )
 /* const [colors, setColors] = useState(data)
  return(
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [...colors,{ id: v4(), rating: 0, title,color}];
          setColors(newColors);
        }}
      />
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
    </>
  ) // proof destructuring*/
}

// Render App component
render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById("root")
);