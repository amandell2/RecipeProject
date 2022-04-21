import { useContext } from "react"
import RecipeContext from "../context/RecipeContext"
import BasicRecipe from "./BasicRecipe";

export default function FavoritesList(){
    const {recipe, removeRecipe} = useContext(RecipeContext);

    return(
        <div>
            {recipe.map((favoriteRecipe, i)=> 
            <>
            <BasicRecipe key={i} recipe={favoriteRecipe}/>
            <button onClick={()=>removeRecipe(favoriteRecipe.id)}>Remove from Favorites</button>
            </>
            )}
        </div>
    )
}