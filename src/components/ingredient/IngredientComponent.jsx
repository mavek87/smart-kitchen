import Combobox from "../base/Combobox.jsx";
import Input from "../base/Input.jsx";
import {useState} from "react";
import * as uuid from "uuid";
import PropTypes from "prop-types";

const ingredientQuantityUnitsArray = [
    {id: 1, value: "g", text: "Grams"},
    {id: 2, value: "kg", text: "Kilograms"},
]

IngredientComponent.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    ingredientQuantityUnit: PropTypes.string.isRequired,
    isEnabled: PropTypes.bool
};

export default function IngredientComponent(
    {
        id = uuid.v4(),
        name = undefined,
        quantity = 0,
        ingredientQuantityUnit = "g",
        isEnabled = true
    }
) {
    const [ingredientId] = useState(id);
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
            <div className={"flex flex-col md:flex-row md:space-x-4"}>
                <Input
                    id={`ingredient-name-${ingredientId}`}
                    value={ingredientName}
                    isEnabled={isEnabled}
                    onChangeTextHandler={onChangeIngredientNameHandler}
                />
                <Input
                    id={`ingredient-quantity-${ingredientId}`}
                    value={+ingredientQuantity}
                    isEnabled={true}
                    type="number"
                    onChangeTextHandler={onChangeIngredientQuantityHandler}
                />
                <Combobox id={`ingredient-quantity-unit-${ingredientId}`}
                          data={ingredientQuantityUnitsArray}
                          onChangeSelectionHandler={onChangeIngredientQuantityUnitHandler}
                          isEnabled={isEnabled}
                />
            </div>
        </section>
    )
}