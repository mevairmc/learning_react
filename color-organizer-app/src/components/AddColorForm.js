import React, { useState } from 'react'
import { useInput } from "./hooks";
// There are many ways to get information
// For this component we'll learn to use useRef

export default function AddColorForm(oneNewColor = f => f){
/*  const txtTitle = useRef()
  const hexColor = useRef()*/
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = e => {
    e.preventDefault()
    // const title = txtTitle.current.value
    // const color = hexColor.current.value
    oneNewColor(title, color)
    // txtTitle.current.value = ""
    // hexColor.current.value = ""
    resetTitle()
    resetColor()
  }

  return(
    <form onSubmit={submit}>
{/*   <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required /> */}
      <input
        {...titleProps} // value: value initial and onChange: event ot set value
        onChange={event => setTitle(event.target.value)}
        type="text"
        placeholder="color title..."
        required
      />
      <input
        {...colorProps}
        onChange={event => setColor(event.target.value)}
        type="color"
        required
      />
      <button onClick={submit}>ADD</button>
    </form>
  )
}