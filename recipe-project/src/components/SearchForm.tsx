import {FormEvent, useState} from 'react';
import {RecipeSearch} from "../models/recipe-model"

// Add call back function from parent
interface Props {
    onSubmit:(recipe:RecipeSearch) => void;
}    
    


function SearchForm({onSubmit}: Props) {
    const [label, setlabel] =useState('');
    const [healthLabel, setHealthLabel] = useState('');
    const [minCalories, setMinCalories] = useState('');
    const [maxCalories, setMaxCalories] = useState('');

    //Set min & max
 function handleSubmit(e:FormEvent) {
    e.preventDefault();
    const recipe: RecipeSearch ={
        label: label,
        health: healthLabel,
        calories: `${minCalories}-${maxCalories}`
    }

    onSubmit(recipe);

    setlabel('');
    setHealthLabel('');
    setMinCalories('');
    setMaxCalories('');

}

    return(
        <div className='SearchForm'>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor='label'>Keyword</label>
                    <input id = "label" value = {label} onChange ={e => setlabel(e.target.value)} required/> 
                </p>
                <p>
                    <label htmlFor="health_labels">Restrictions</label>
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
                <p>
                    <label htmlFor='minCalories'>Minimum Calories</label>
                    <input id ="calories" type="number" value={minCalories} onChange={e => setMinCalories(e.target.value)}/>
                    <label htmlFor='minCalories'>Maximum Calories</label>
                    <input id ="calories" type="number" value={maxCalories} onChange={e => setMaxCalories(e.target.value)}/>
                </p>
                <input type="submit"value ="Submit"/>

                     

            </form>

            
        </div>
    )
}

export default SearchForm;