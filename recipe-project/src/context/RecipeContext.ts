import {createContext} from "react";
import {Hits} from "../models/recipe-model";
import {Recipe} from "../models/recipe-model";


interface RecipeContextModel {
    recipe: Recipe[];
    addRecipe: (recipe: Recipe) => void;
    removeRecipe:(id:number) => void;
    
}

const defaultValue: RecipeContextModel = {
    recipe:[],
    addRecipe:() => {},
    removeRecipe:() => {}

}

const RecipeContext = createContext(defaultValue);
export default RecipeContext;