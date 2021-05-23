import React, { useRef } from 'react'
// There are many ways to get information
// For this component we'll learn to use useRef

export default function AddColorForm(oneNewColor = f => f){

  const txtTitle = useRef()
  const hexColor = useRef()
  const submit = e => {
    e.preventDefault()
    const title = txtTitle.current.value
    const color = hexColor.current.value
    oneNewColor(title, color)
    txtTitle.current.value = ""
    hexColor.current.value = ""
  }

  return(
    <form>
      <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required />
      <button onClick={submit}>ADD</button>
    </form>
  )
}