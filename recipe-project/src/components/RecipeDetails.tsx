import { Recipe } from "../models/recipe-model";
import { useLocation } from "react-router-dom";
import "./RecipeDetails.css";

interface Props{
    recipe: Recipe;
}

export default function RecipeDetails(){
    const location = useLocation();
    const state = location.state as Props;
    const {recipe} = state;
   
    return(
        <div className="RecipeDetails_container">
           <h2 className="RecipeDetails_title">{recipe.label}</h2>
           <div className="RecipeDetails_sideBySide">
               <img src={recipe.image}></img>
               <ul>
                   <li><a href={recipe.url}>Click here for Recipe Link!</a></li>
                   <li>Serves: {recipe.yield}</li>
                   {recipe.dietLabels != "" && <li>{recipe.dietLabels}</li>}
                   <li>Calories: {recipe.calories.toFixed()}</li>
                   <li>Total Time: {recipe.totalTime}</li>
                   <li>Recipe Source: {recipe.source}</li>
                   <li>Ingredients: 
                    <ul>
                       {recipe.ingredientLines.map((ingredient)=><li>{ingredient}</li>)}
                    </ul>
                    </li>
               </ul>
            </div>
        </div>
    )
}