import {FormEvent, useState} from 'react';
import {RecipeSearch} from "../models/recipe-model"
import './SearchForm.css';

// Add call back function from parent
interface Props {
    onSubmit:(recipe:RecipeSearch) => void;
}    
    


function SearchForm({onSubmit}: Props) {
    const [label, setlabel] =useState('');
    const [healthLabel, setHealthLabel] = useState('');
    const [mealType, setMealType] = useState('');

    
 function handleSubmit(e:FormEvent) {
    e.preventDefault();
    const recipe: RecipeSearch ={
        label: label,
        health: healthLabel,
        mealType: mealType
    }

    onSubmit(recipe);

    setlabel('');
    setHealthLabel('');
    setMealType('');

}

    return(
        <div className='SearchForm'>
            <form onSubmit={handleSubmit}>
                <p className='SectionOne'>
                    <label htmlFor='label'>Keyword</label>
                    <input id = "label" value = {label} onChange ={e => setlabel(e.target.value)} required/> 
                    <label htmlFor="health_labels" className="RestrictionsLabel">Restrictions</label>
                    {/*<input id='health_labels' value={healthLabel} onChange={e => setHealthLabel(e.target.value)}/>*/}
                    <select id='health_labels' value={healthLabel} onChange={e => setHealthLabel(e.target.value)}>
                        <option value="empty"></option>
                        <option value="dairy-free">dairy-free</option>
                        <option value="gluten-free">gluten-free</option>
                        <option value="vegan">vegan</option>
                        <option value="vegetarian">vegetarian</option>
                        <option value="tree-nut-free">tree-nut-free</option>
                    </select>
                </p>
                <p className='SectionTwo'>
                    <p className='MealType'>Meal Type</p>
                    <p className='MealButtons'>
                        <input id ="breakfast" type="radio" value="breakfast" checked={mealType==="breakfast"} onChange={e => setMealType(e.target.value)}/>
                        <label  className="breakfast"htmlFor='breakfast'>Breakfast</label>
                        <input id ="lunch" type="radio" value="lunch" checked={mealType==="lunch"}  onChange={e => setMealType(e.target.value)}/>
                        <label htmlFor='lunch'>Lunch</label>
                        <input id ="dinner" type="radio" value="dinner" checked={mealType==="dinner"}  onChange={e => setMealType(e.target.value)}/>
                        <label htmlFor='dinner'>Dinner</label>
                        <input id ="snack" type="radio" value="snack" checked={mealType==="snack"}  onChange={e => setMealType(e.target.value)}/>
                        <label htmlFor='snack'>Snack</label>
                    </p>
                    <input className='submit' type="submit"value ="Submit"/>
                </p>
                

                     

            </form>

            
        </div>
    )
}

export default SearchForm;