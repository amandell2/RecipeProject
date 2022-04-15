export interface ApiResponse{
    hit: Hit[];
  }
  
export interface Hit{
    recipe: Recipe;
  }
  
export interface Recipe{
    label: string
    //any other details we want
}
  