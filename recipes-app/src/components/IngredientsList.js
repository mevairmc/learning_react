import React from "react";
import Ingredient from "./Ingredients";

export default function IngredientsList({list}){
  return(
    <ul className="ingredients">
      {list.map((ingredients, i)=>(
        <Ingredient key={i} {...ingredients}/>
      ))}
    </ul>
  )
}