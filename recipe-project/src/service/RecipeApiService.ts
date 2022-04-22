import { ApiResponse, Hits, Recipe, RecipeSearch } from "../models/recipe-model";
import axios from "axios";
const apiKey = process.env.REACT_APP_RECIPE_API_KEY;
const appId = process.env.REACT_APP_RECIPE_APP_ID;


export function fetchAll(userSearch: string = "dinner"): Promise<ApiResponse>{
    return axios.get("https://api.edamam.com/api/recipes/v2?type=public&q="+userSearch+"&app_id="+appId+"&app_key="+apiKey)
    .then(reponse => reponse.data);
}

export function fetchHits(userSearch: string = "dinner"): Promise<Hits[]>{
    return axios.get("https://api.edamam.com/api/recipes/v2?type=public&q="+userSearch+"&app_id="+appId+"&app_key="+apiKey)
    .then((response)=> {return response.data.hits});
}

export function fetchFilteredHits(recipeSearch: RecipeSearch): Promise<Hits[]>{
    if(recipeSearch.label && !recipeSearch.health && recipeSearch.calories==="-"){
        return axios.get("https://api.edamam.com/api/recipes/v2?type=public&q="+recipeSearch.label+"&app_id="+appId+"&app_key="+apiKey)
        .then((response)=> {return response.data.hits});
    }else if(recipeSearch.label && recipeSearch.health && recipeSearch.calories==="-"){
        return axios.get("https://api.edamam.com/api/recipes/v2?type=public&q="+recipeSearch.label+"&health="+recipeSearch.health+"&app_id="+appId+"&app_key="+apiKey)
        .then((response)=> {return response.data.hits});
    }else if(recipeSearch.label && recipeSearch.calories && !recipeSearch.health ){
        return axios.get("https://api.edamam.com/api/recipes/v2?type=public&q="+recipeSearch.label+"&calories="+recipeSearch.calories+"&app_id="+appId+"&app_key="+apiKey)
        .then((response)=> {return response.data.hits});
    }else{
        return axios.get("https://api.edamam.com/api/recipes/v2?type=public&q="+recipeSearch.label+"&health="+recipeSearch.health+"&calories="+recipeSearch.calories+"&app_id="+appId+"&app_key="+apiKey)
        .then((response)=> {return response.data.hits});
    }
}
