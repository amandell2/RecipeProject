import { ApiResponse, Hits, Recipe } from "../models/recipe-model";
const apiKey = process.env.REACT_APP_NEWS_API_KEY || "";

import axios, {AxiosResponse} from "axios";

export function fetchAll(): Promise<ApiResponse>{
    return axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=dinner&app_id=b2697aac&app_key=${apiKey}`)
    .then(reponse => reponse.data);
}

export function fetchHits(): Promise<Hits>{
    return axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=dinner&app_id=b2697aac&app_key=${apiKey}`)
    .then((response)=> {return response.data.hit});
}

export function fetchRecipe(): Promise<Recipe>{
    return fetchHits()
    .then((data)=> {return data.recipe});
}