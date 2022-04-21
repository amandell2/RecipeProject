import BasicRecipe from "./BasicRecipe";
import { useContext, useEffect, useState } from "react";
import { Hits, Recipe} from "../models/recipe-model";
import { fetchHits} from "../service/RecipeApiService";
import { Link } from "react-router-dom";
import RecipeContext from "../context/RecipeContext";
import "./MainPage.css";


export default function MainPage(){
    const [recipeList, setRecipeList] = useState<Hits[]>([]);
    const {recipe, addRecipe} = useContext(RecipeContext);

    useEffect(()=>{
        fetchHits().then(data =>{
            setRecipeList(data);
        });
    });

    return(
        <div>
            <button className="searchBtn">Search Recipes</button>
            <main className="MainPage_RecipeDisplay">
            {recipeList.map((data, i)=>
                <div className="MainPage_SingleRecipe">
               <BasicRecipe key={i} recipe={data.recipe}/>
               <div className="MainPage_BtnDisplay">
                    <Link to="/details" state={{recipe: data.recipe}}><button>Details</button></Link>
                    <button onClick={()=>addRecipe(data.recipe)}>Add to Favorites</button>
               </div>
               </div>
            )}
            </main>
            
        </div>
    )
}