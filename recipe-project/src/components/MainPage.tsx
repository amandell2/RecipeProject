import BasicRecipe from "./BasicRecipe";
import { useContext, useEffect, useState } from "react";
import { Hits, Recipe, RecipeSearch} from "../models/recipe-model";
import { fetchFilteredHits, fetchHits} from "../service/RecipeApiService";
import { Link } from "react-router-dom";
import RecipeContext from "../context/RecipeContext";
import "./MainPage.css";
import SearchForm from "./SearchForm";


export default function MainPage(){
    const [recipeList, setRecipeList] = useState<Hits[]>([]);
    const {addRecipe, recipeExists} = useContext(RecipeContext);
    const [showSearch, setShowSearch]= useState(false);

    useEffect(()=>{
        fetchHits().then(data =>{
            setRecipeList(data);
        });
    }, []);

    function handleSearchDisplay(recipeSearch: RecipeSearch): void{
        fetchFilteredHits(recipeSearch).then(data =>{
            setRecipeList(data);
        });
        setShowSearch(false);
    };

    return(
        <div>
            <button className="searchBtn" onClick={()=> setShowSearch(true)}>
                Search Recipes
            </button>
            {showSearch && <SearchForm onSubmit={handleSearchDisplay}/> }
            
            <main className="MainPage_RecipeDisplay">
            {recipeList.map((data, i)=>
                <div className="MainPage_SingleRecipe">
               <BasicRecipe key={i} recipe={data.recipe}/>
               <div className="MainPage_BtnDisplay">
                    <Link to="/details" state={{recipe: data.recipe}}><button>Details</button></Link>
                    {!recipeExists(data.recipe) && <button onClick={()=>addRecipe(data.recipe)}>Add to Favorites</button>}
               </div>
               </div>
            )}
            </main>
            
        </div>
    )
}