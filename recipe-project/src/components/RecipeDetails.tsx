import { Recipe } from "../models/recipe-model";
import { useLocation } from "react-router-dom";
import "./RecipeDetails.css";
import { useContext } from "react";
import RecipeContext from "../context/RecipeContext";
import { Link } from "react-router-dom";

interface Props{
    recipe: Recipe;
}

export default function RecipeDetails(){
    const location = useLocation();
    const {addRecipe, recipeExists} = useContext(RecipeContext);
    const state = location.state as Props;
    const {recipe} = state;
   
    return(
        <div className="RecipeDetails_container">
           <h2 className="RecipeDetails_title">{recipe.label}</h2>
           <div className="RecipeDetails_sideBySide">
               <img src={recipe.image}></img>
               <ul>
                   <li>Recipe Source: {recipe.source}
                   <br/>
                   <a href={recipe.url}>Click here for Recipe Link!</a>
                   </li>
                   <li>Serves: {recipe.yield}</li>
                   {recipe.dietLabels != "" && <li>Dietary Info: {recipe.dietLabels}</li>}
                   <li>Calories: {recipe.calories.toFixed()}</li>
                   <li>Total Time: {recipe.totalTime} minutes</li>
                   <li>Ingredients: 
                    <ul>
                       {recipe.ingredientLines.map((ingredient)=><li>{ingredient}</li>)}
                    </ul>
                    </li>
                    <div className="RecipeDetails_favBtnContainer">
                    {!recipeExists(recipe) && <button className="RecipeDetails_favBtn"onClick={()=>addRecipe(recipe)}>Add to Favorites</button>}
               </div>
               </ul>
            </div>
        </div>
    )
}