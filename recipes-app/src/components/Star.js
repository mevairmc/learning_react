import React from 'react'
import { FaStar } from "react-icons/fa";

const Star = ({selected = false, onSelect = f => f }) => ( //we can put onSelect = f => f only show is a default function
  <FaStar color={ selected ? "red" : "gray" } onClick={onSelect}/>
)

export default Star;