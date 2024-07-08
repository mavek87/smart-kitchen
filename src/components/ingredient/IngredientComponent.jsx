import {useState} from "react";
import * as uuid from "uuid";
import PropTypes from "prop-types";
import {logComponentRendering} from "../../utils/log.js";
import Input from "../ui/base/Input.jsx";
import Combobox from "../ui/base/Combobox.jsx";
import ButtonSmall from "../ui/base/ButtonSmall.jsx";
import ModalEditIngredient from "../ui/composed/modals/ModalEditIngredient.jsx";

const ingredientQuantityUnitsArray = [
    {id: 1, value: "g", text: "Grams"},
    {id: 2, value: "kg", text: "Kilograms"},
]

IngredientComponent.propTypes = {
    recipeId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    ingredientQuantityUnit: PropTypes.string.isRequired,
    isEnabled: PropTypes.bool,
    onDeleteIngredient: PropTypes.func.isRequired
};

export default function IngredientComponent(props) {
    logComponentRendering(props);

    const {
        recipeId = undefined,
        id = uuid.v4(),
        name = undefined,
        quantity = 0,
        ingredientQuantityUnit = "g",
        isEnabled,
        onDeleteIngredient
    } = props;

    const [ingredientId] = useState(id);
    const [ingredientName, setIngredientName] = useState(name);
    const [ingredientQuantity, setIngredientQuantity] = useState(quantity);
    const [, setIngredientQuantityUnit] = useState(ingredientQuantityUnit);

    const [isModalEditRecipeOpen, setModalAddRecipeOpen] = useState(false);

    const editIngredientHandler = () => {
        setModalAddRecipeOpen(true);
    }

    const closeEditIngredientHandler = () => {
        setModalAddRecipeOpen(false);
    }

    return (
        <section id={ingredientId}>
            <div className={"flex flex-col justify-around md:flex-row md:space-x-4"}>
                <Input
                    id={`ingredient-name-${ingredientId}`}
                    type="text"
                    value={ingredientName}
                    placeholder={"ingredient name"}
                    className={"text-sm"}
                    onChange={event => setIngredientName(event.target.value)}
                    readOnly={!isEnabled}
                />
                <Input
                    id={`ingredient-quantity-${ingredientId}`}
                    type="number"
                    value={+ingredientQuantity}
                    placeholder={"ingredient quantity"}
                    min={0}
                    className={"text-sm"}
                    onChange={event => setIngredientQuantity(event.target.value)}
                    readOnly={!isEnabled}
                />
                <Combobox id={`ingredient-quantity-unit-${ingredientId}`}
                          data={ingredientQuantityUnitsArray}
                          placeholder={"ingredient quantity unit"}
                          className={"text-sm"}
                          onChange={event => setIngredientQuantityUnit(event.target.value)}
                          disabled={!isEnabled}
                />
                {
                    isEnabled
                        ? null
                        : <>
                            <ButtonSmall
                                className={"h-12 primary text-sm"}
                                onClick={editIngredientHandler}
                            >
                                Edit
                            </ButtonSmall>
                            <ModalEditIngredient
                                recipeId={recipeId}
                                ingredient={{
                                    id: ingredientId,
                                    name: ingredientName,
                                    quantity: ingredientQuantity,
                                    ingredientQuantityUnit: ingredientQuantityUnit
                                }}
                                onSaveIngredient={() => {
                                }}
                                onDeleteIngredient={onDeleteIngredient}
                                onCancelEditIngredient={closeEditIngredientHandler}
                                isModalOpen={isModalEditRecipeOpen}
                            />
                        </>
                }
                <ButtonSmall className={"h-12 secondary text-sm"} onClick={() => onDeleteIngredient(recipeId, ingredientId)}>Delete</ButtonSmall>
            </div>
        </section>
    )
}