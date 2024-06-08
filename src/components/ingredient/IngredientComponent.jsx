import Combobox from "../base/Combobox.jsx";
import Input from "../base/Input.jsx";
import {useState} from "react";
import * as uuid from "uuid";

const ingredientQuantityUnitsArray = [
    {id: 1, value: "g", text: "Grams"},
    {id: 2, value: "kg", text: "Kilograms"},
]

export default function IngredientComponent(
    {
        id = uuid.v4(),
        name = undefined,
        quantity = 0,
        ingredientQuantityUnit = "g"
    }
) {
    const [ingredientId, setIngredientId] = useState(id);
    const [ingredientName, setIngredientName] = useState(name);
    const [ingredientQuantity, setIngredientQuantity] = useState(quantity);
    const [setIngredientQuantityUnit] = useState(ingredientQuantityUnit);

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
        <section id={ingredientId}>
            <h3>Ingredient</h3>
            <div className={"flex flex-col md:flex-row md:space-x-4"}>
                <Input
                    id={`ingredient-name-${ingredientId}`}
                    label="Name:"
                    value={ingredientName}
                    onChangeTextHandler={onChangeIngredientNameHandler}
                />
                <Input
                    id={`ingredient-quantity-${ingredientId}`}
                    label="Quantity:"
                    value={ingredientQuantity}
                    onChangeTextHandler={onChangeIngredientQuantityHandler}
                />
                <Combobox id={`ingredient-quantity-unit-${ingredientId}`}
                          label="Unit:"
                          data={ingredientQuantityUnitsArray}
                          onChangeSelectionHandler={onChangeIngredientQuantityUnitHandler}
                />
            </div>
        </section>
    )
}