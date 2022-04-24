import { useContext } from "react"
import RecipeContext from "../context/RecipeContext"
import "./FavoriteList.css";
import BasicRecipe from "./BasicRecipe";

export default function FavoritesList(){
    const {favoriteRecipes, removeRecipe} = useContext(RecipeContext);

    return(
        <div className="FavoriteList">
            {favoriteRecipes.map((favoriteRecipe, i)=> 
            <>
            <BasicRecipe key={i} recipe={favoriteRecipe} />
            <button className="RemoveButton" onClick={()=>removeRecipe(favoriteRecipe.id)}>Remove from Favorites</button>
            </>
            )}
        </div>
    )
}