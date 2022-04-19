import BasicRecipe from "./BasicRecipe";
import { useEffect, useState } from "react";
import { Hits} from "../models/recipe-model";
import { fetchHits} from "../service/RecipeApiService";
import { Link, useNavigate } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";

export default function MainPage(){
    const [showDetails, setShowDetails] = useState(false)
    const [recipeList, setRecipeList] = useState<Hits[]>([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetchHits().then(data =>{
            setRecipeList(data);
        });
    });

    return(
        <div>
            <h1><Link to="/">Dinner Recipes</Link></h1>
            <button>Search Recipes</button>
            <main>
            {recipeList.map((data, i)=>
                <>
               <BasicRecipe key={i} recipe={data.recipe}/>
               <button onClick={()=>navigate('/details', {state: {recipe: data.recipe}})}>Details</button>
               {/* 
               {showDetails === true && <RecipeDetails recipe={data.recipe}/>}
               */}
               
               </>
            )}
            
            </main>
            
        </div>
    )
}