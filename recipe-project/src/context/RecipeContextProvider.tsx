import { ReactNode, useState } from "react";
import {Recipe }from "../models/recipe-model";
import RecipeContext from "./RecipeContext";


interface Props{
    children: ReactNode;
}



export default function RecipeContextProvider({children}:Props){
    const [recipe, setRecipe]= useState<Recipe[]>([]);

    function addRecipe(newRecipe:Recipe){
        console.log("added recipe:", newRecipe);
        if(recipe.length===0){
            newRecipe.id=1;
        }else{
        let lastRecipeId=recipe[recipe.length -1].id;
        ++lastRecipeId;
        newRecipe.id = lastRecipeId
        }

        setRecipe(prev => [...prev, newRecipe]);
        
    }

    

        function removeRecipe (id: number ): void {
            const index = recipe.findIndex(recipe => recipe.id === id);
            setRecipe(prev => [...prev.slice(0,index)])
        }

        return(
            <RecipeContext.Provider value={{ recipe, addRecipe, removeRecipe}}>
                {children}

            </RecipeContext.Provider>

        );

        
      
    }
    





