import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import StartRating from "./StarsRating"

export default function Recipe({ name, ingredients, steps }) {
  return(
    // We replace spaces in name with -(we use flag "g" to do it)
    <div id={name.toLowerCase().replace(/ /g,"-")}>
      <h2>{name}</h2>
      <IngredientsList list={ingredients}/>
      <Instructions title="Cooking Instructions" steps={steps} />
      <StartRating
        style={{backgroundColor: "lightblue"}}
        onDoubleClick={e => alert("double click")}
      />
    </div>
  )
}

