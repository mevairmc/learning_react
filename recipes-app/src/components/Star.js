import React from 'react'
import { FaStar } from "react-icons/fa";

const Star = ({selected = false}) => (
  <FaStar color={ selected ? "red" : "gray" }/>
)

export default Star;