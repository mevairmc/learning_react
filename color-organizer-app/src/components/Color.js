import React from 'react'


export default function Color({color= "white", title = "new color" }) {
  console.log(color)
  return(
    <>
      <h3>{title}</h3>
      <div
        style={{
          backgroundColor:`${color}`,
          width: "100%",
          height: "2rem"
        }}
      />
    </>
  )
}