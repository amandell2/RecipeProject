import { useEffect, useState } from "react";
import { Hits, Recipe } from "../models/recipe-model";
import { fetchHits } from "../service/RecipeApiService";

interface Props{
    recipe: Recipe;
}

export default function BasicRecipe({recipe}: Props){
    

    return(
        <div className="BasicRecipe_Container">
           <>
               <h2>{recipe.label}</h2>
               <img src={recipe.image}></img>
               <ul>
                   <li>Serves: {recipe.yield}</li>
                   <li>{recipe.dietLabels}</li>
                   <li>Calories: {recipe.calories}</li>
               </ul>
            </>
            
        </div>
    )
}