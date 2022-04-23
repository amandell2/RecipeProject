import {createContext} from "react";
import {Hits} from "../models/recipe-model";
import {Recipe} from "../models/recipe-model";


interface RecipeContextModel {
    favoriteRecipes: Recipe[];
    addRecipe: (recipe: Recipe) => void;
    removeRecipe:(id:number) => void;
    recipeExists:(recipe: Recipe) => boolean;
    
}

const defaultValue: RecipeContextModel = {
    favoriteRecipes:[],
    addRecipe:() => {},
    removeRecipe:() => {},
    recipeExists:() => false
}

const RecipeContext = createContext(defaultValue);
export default RecipeContext;