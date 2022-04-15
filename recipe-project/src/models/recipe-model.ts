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
    ingredientLines: string;
    //any other details we want??
}
  