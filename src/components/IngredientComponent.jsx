import Combobox from "./base/Combobox.jsx";
import Input from "./base/Input.jsx";
import {useState} from "react";

const people = [
    {id: 1, value: "g", text: 'Grams'},
    {id: 2, value: "kg", text: 'Kilograms'},
]

export default function IngredientComponent() {
    const [setIngredientName] = useState(undefined);
    const [setIngredientQuantity] = useState(0);
    const [setIngredientQuantityUnit] = useState("g");

    const onChangeIngredientNameHandler = (ingredientName) => {
        console.log(ingredientName);
        setIngredientName(ingredientName);
    }

    const onChangeIngredientQuantityHandler = (ingredientQuantity) => {
        console.log(ingredientQuantity);
        setIngredientQuantity(ingredientQuantity);
    }

    const onChangeIngredientQuantityUnitHandler = (ingredientQuantityAmount) => {
        console.log(ingredientQuantityAmount);
        setIngredientQuantityUnit(ingredientQuantityAmount);
    }

    return (
        <section>
            <h3>Ingredient</h3>
            <Input id="ingredient-name" label="Ingredient name:" onChangeTextHandler={onChangeIngredientNameHandler}/>
            <Input id="ingredient-quantity" label="Ingredient quantity:"
                   onChangeTextHandler={onChangeIngredientQuantityHandler}/>
            <Combobox id="ingredient-quantity-unit"
                      label="Ingredient quantity unit:"
                      data={people}
                      onChangeSelectionHandler={onChangeIngredientQuantityUnitHandler}/>
        </section>
    )
}