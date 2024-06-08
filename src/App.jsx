import './App.css'
import {useState} from "react";
import RecipeComponent from "./components/recipe/RecipeComponent.jsx";
import * as uuid from "uuid";

const recipeCarbonara = [
    {
        id: uuid.v4(),
        name: 'spaghetti',
        quantity: 150,
        ingredientQuantityUnit: 'g'
    },
    {
        id: uuid.v4(),
        name: 'egg',
        quantity: 100,
        ingredientQuantityUnit: 'g'
    },
    {
        id: uuid.v4(),
        name: 'pancetta',
        quantity: 50,
        ingredientQuantityUnit: 'g'
    },
    {
        id: uuid.v4(),
        name: 'pecorino',
        quantity: 10,
        ingredientQuantityUnit: 'g'
    }
]

function App() {
    const [ingredients, setIngredients] = useState(recipeCarbonara);

    return (
        <>
            <RecipeComponent name="carbonara" ingredients={ingredients}/>
        </>
    )
}

export default App
