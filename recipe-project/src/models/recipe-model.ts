export interface ApiResponse{
    hits: Hits[];
  }
  
export interface Hits{
    recipe: Recipe;
  }
  
export interface Recipe{

    label: string;
    image: string;
    yield: number;
    dietLabels: string;
    calories: number;
    totalTime: number;
    source: string;
    url: string;
    ingredientLines: string[];
    id:number;
    favorite: boolean;
}

export interface RecipeSearch{
  label: string;
  health: string;
  mealType: string;
}