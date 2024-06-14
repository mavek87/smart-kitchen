import Combobox from "../base/Combobox.jsx";
import Input from "../base/Input.jsx";
import {useState} from "react";
import * as uuid from "uuid";
import PropTypes from "prop-types";
import {logComponentRendering} from "../../utils/log.js";
import ButtonSmall from "../base/ButtonSmall.jsx";
import Modal from "../base/Modal.jsx";
import ButtonLarge from "../base/ButtonLarge.jsx";

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
        isEnabled
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
                            <Modal
                                title={`Edit ingredient '${name}'`}
                                content={
                                    <article className={"max-w-6xl"}>
                                        <IngredientComponent
                                            id={id}
                                            name={name}
                                            quantity={quantity}
                                            ingredientQuantityUnit={ingredientQuantityUnit}
                                            isEnabled={true}
                                        />
                                        {/*TODO: remove duplication with a component */}
                                        <footer className={"flex flex-row space-x-4"}>
                                            <ButtonLarge
                                                className={"secondary"}
                                                value={"Cancel"}
                                                onClick={closeEditIngredientHandler}
                                            />
                                            <ButtonLarge
                                                className={"primary"}
                                                value={"Save Ingredient"}
                                            />
                                        </footer>
                                    </article>
                                }
                                isOpen={isModalEditRecipeOpen}
                                onCloseHandler={closeEditIngredientHandler}
                            />
                        </>
                }
                <ButtonSmall className={"h-12 secondary text-sm"}>Delete</ButtonSmall>
            </div>
        </section>
    )
}