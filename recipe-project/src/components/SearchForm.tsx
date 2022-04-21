import {FormEvent, useState} from 'react';
import {Recipe} from "../models/recipe-model"

// Add call back function from parent
interface Props {
    onSubmit:(recipe:Recipe) => void;
}    
    


function SearchForm() {
    const [label, setlabel] =useState('');
    const [dietLabels, setdietLabels] = useState('');
    const [calories, setCalories] = useState('');



    
 function handleSubmit(e:FormEvent) {
    e.preventDefault();
    setlabel('');
    setdietLabels('');
    setCalories('');
    


}

    return(
        <div className='SearchForm'>
            <form onSubmit={handleSubmit}>
                <h2>Search</h2>
                <p>
                    <label htmlFor='label'>Keyword</label>
                    <input id = "label" value = {label} onChange ={e => setlabel(e.target.value)}/> 
                </p>
                <p>
                    <label htmlFor="diet_labels">Restrictions</label>
                    <input id='diet_labels' value={dietLabels} onChange={e => setdietLabels(e.target.value)}/>
                </p>
                <p>
                    <label htmlFor='calories'>Calories</label>
                    <input id ="calories" value={calories} onChange={e => setCalories(e.target.value)}/>
                </p>
                <input type="submit"value ="Submit"/>

                     

            </form>

            
        </div>
    )
}

export default SearchForm;