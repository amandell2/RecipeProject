import { Recipe } from "../models/recipe-model";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Hits} from "../models/recipe-model";
import { fetchHits} from "../service/RecipeApiService";

interface Props{
    recipe: Recipe;
}

export default function RecipeDetails(){
    const {state} = useLocation();
    const {recipe} = state as any;
    return(
        <div>
           <h2>{recipe.label}</h2>
               <img src={recipe.image}></img>
               <ul>
                   <li>Serves: {recipe.yield}</li>
                   <li>{recipe.dietLabels}</li>
                   <li>Calories: {recipe.calories}</li>
                   <li>Total Time: {recipe.totalTime}</li>
                   <li>Recipe Source: {recipe.source}</li>
                   <li><a href={recipe.url}>Click here for Recipe Link!</a></li>
                   <li>Ingredients: {recipe.ingredientLines}</li>
               </ul>
        </div>
    )
}