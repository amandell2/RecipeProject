import { useContext, useEffect, useState } from "react";
import RecipeContext from "../context/RecipeContext";
import { Hits, Recipe } from "../models/recipe-model";
import { fetchHits } from "../service/RecipeApiService";
import "./BasicRecipe.css";

interface Props{
    recipe: Recipe;
}

export default function BasicRecipe({recipe}: Props){
const {recipeExists} = useContext(RecipeContext);

    return(
        <div className="BasicRecipe_Container">
           <>
            <div className="BasicRecipe_header">
            {recipeExists(recipe) && <span className="BasicRecipe_heart">&hearts;</span>}
            <h2>{recipe.label}</h2>
            </div>
            <img src={recipe.image}></img>
               <ul>
                   <li>Serves: {recipe.yield}</li>
                   {recipe.dietLabels != "" && <li>{recipe.dietLabels}</li>}
                   <li>Calories: {recipe.calories.toFixed()}</li>
               </ul>
            </>
            
        </div>
    )
}