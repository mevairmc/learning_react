import React, {useState} from "react";
import { render } from "react-dom";
import ColorList from "./components/ColorList";
import data from "./data/ColorList.json";


function App() {
  const [colors] = useState(data)
  return <ColorList colors={colors} /> // proof destructuring
}

// Render App component
render(<App />, document.getElementById("root"));