import { ApiResponse, Hits, Recipe } from "../models/recipe-model";
import axios from "axios";
const apiKey = process.env.REACT_APP_RECIPE_API_KEY;



export function fetchAll(userSearch: string = "dinner"): Promise<ApiResponse>{
    return axios.get("https://api.edamam.com/api/recipes/v2?type=public&q="+userSearch+"&app_id=b2697aac&app_key="+apiKey)
    .then(reponse => reponse.data);
}

export function fetchHits(userSearch: string = "dinner"): Promise<Hits[]>{
    return axios.get("https://api.edamam.com/api/recipes/v2?type=public&q="+userSearch+"&app_id=b2697aac&app_key="+apiKey)
    .then((response)=> {return response.data.hits});
}

