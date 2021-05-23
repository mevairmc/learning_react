import React, { useState } from 'react'
// There are many ways to get information
// For this component we'll learn to use useRef

export default function AddColorForm(oneNewColor = f => f){
/*  const txtTitle = useRef()
  const hexColor = useRef()*/
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = e => {
    e.preventDefault()
    // const title = txtTitle.current.value
    // const color = hexColor.current.value
    oneNewColor(title, color)
    // txtTitle.current.value = ""
    // hexColor.current.value = ""
    setTitle("")
    setColor("")
  }

  return(
    <form onSubmit={submit}>
{/*   <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required /> */}
      <input
        value={title}
        onChange={event => setTitle(event.target.value)}
        type="text"
        placeholder="color title..."
        required
      />
      <input
        value={color}
        onChange={event => setColor(event.target.value)}
        type="color"
        required
      />
      <button onClick={submit}>ADD</button>
    </form>
  )
}