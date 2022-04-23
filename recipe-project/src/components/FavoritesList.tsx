import { useContext } from "react"
import RecipeContext from "../context/RecipeContext"
import BasicRecipe from "./BasicRecipe";

export default function FavoritesList(){
    const {favoriteRecipes, removeRecipe} = useContext(RecipeContext);

    return(
        <div>
            {favoriteRecipes.map((favoriteRecipe, i)=> 
            <>
            <BasicRecipe key={i} recipe={favoriteRecipe} />
            <button onClick={()=>removeRecipe(favoriteRecipe.id)}>Remove from Favorites</button>
            </>
            )}
        </div>
    )
}