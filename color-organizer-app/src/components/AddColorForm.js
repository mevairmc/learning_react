import React, { useState } from 'react'
import { useInput } from "./hooks";
// There are many ways to get information
// For this component we'll learn to use useRef

export default function AddColorForm({onNewColor = f => f}){
  /*  const txtTitle = useRef()
    const hexColor = useRef()*/
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = event => {
    event.preventDefault();
    // const title = txtTitle.current.value
    // const color = hexColor.current.value
    console.log(onNewColor)
    console.log(typeof onNewColor)
    onNewColor(titleProps.value, colorProps.value)
    // txtTitle.current.value = ""
    // hexColor.current.value = ""
    resetTitle();
    resetColor();
  }

  return(
    <form onSubmit={submit}>

      <input
        {...titleProps} // value: value initial and onChange: event ot set value
        type="text"
        placeholder="color title..."
        required
      />
      <input
        {...colorProps}
        type="color"
        required
      />
      <button>ADD</button>
    </form>
  )
}