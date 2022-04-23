import { ReactNode, useState } from "react";
import {Recipe }from "../models/recipe-model";
import RecipeContext from "./RecipeContext";


interface Props{
    children: ReactNode;
}



export default function RecipeContextProvider({children}:Props){
    const [favoriteRecipes, setFavoriteRecipes]= useState<Recipe[]>([]);

    function addRecipe(newRecipe:Recipe){
        console.log("added recipe:", newRecipe);
        if(favoriteRecipes.length===0){
            newRecipe.id=1;
        }else{
        let lastRecipeId=favoriteRecipes[favoriteRecipes.length -1].id;
        ++lastRecipeId;
        newRecipe.id = lastRecipeId
        }

        setFavoriteRecipes(prev => [...prev, newRecipe]);
        
    }

    

        function removeRecipe (id: number ): void {
            const index = favoriteRecipes.findIndex(recipe => recipe.id === id);
            setFavoriteRecipes(prev => [...prev.slice(0,index), ...prev.slice(index+1)])
            console.log("removed recipe:", favoriteRecipes[index]);
        }

        function recipeExists (recipe: Recipe): boolean {
            const foundRecipe = favoriteRecipes.find((fav)=> fav.url === recipe.url);
            if(foundRecipe !== undefined){
                return true
            }else{
                return false
            };
        }

        return(
            <RecipeContext.Provider value={{ favoriteRecipes, addRecipe, removeRecipe, recipeExists}}>
                {children}
            </RecipeContext.Provider>

        );

        
      
    }
    





