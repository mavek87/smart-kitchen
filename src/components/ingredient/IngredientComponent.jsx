import Combobox from "../base/Combobox.jsx";
import Input from "../base/Input.jsx";
import {useState} from "react";
import * as uuid from "uuid";
import PropTypes from "prop-types";
import {logComponentRendering} from "../../utils/log.js";

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

export default function IngredientComponent(props) {
    logComponentRendering(props);

    const {
        id = uuid.v4(),
        name = undefined,
        quantity = 0,
        ingredientQuantityUnit = "g",
        isEnabled = true
    } = props;

    const [ingredientId] = useState(id);
    const [ingredientName, setIngredientName] = useState(name);
    const [ingredientQuantity, setIngredientQuantity] = useState(quantity);
    const [, setIngredientQuantityUnit] = useState(ingredientQuantityUnit);

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
            <div className={"flex flex-col justify-evenly md:flex-row md:space-x-4"}>
                <Input
                    id={`ingredient-name-${ingredientId}`}
                    type="text"
                    value={ingredientName}
                    placeholder={"ingredient name"}
                    className={"text-sm"}
                    onChange={event => onChangeIngredientNameHandler(event.target.value)}
                    readOnly={!isEnabled}
                />
                <Input
                    id={`ingredient-quantity-${ingredientId}`}
                    type="number"
                    value={+ingredientQuantity}
                    placeholder={"ingredient quantity"}
                    min={0}
                    className={"text-sm"}
                    onChange={event => onChangeIngredientQuantityHandler(event.target.value)}
                    readOnly={!isEnabled}
                />
                <Combobox id={`ingredient-quantity-unit-${ingredientId}`}
                          data={ingredientQuantityUnitsArray}
                          placeholder={"ingredient quantity unit"}
                          className={"text-sm"}
                          onChange={event => onChangeIngredientQuantityUnitHandler(event.target.value)}
                          disabled={!isEnabled}
                />
                <button className={"h-12 primary text-sm"}>Edit</button>
                <button className={"h-12 secondary text-sm"}>Delete</button>
            </div>
        </section>
    )
}