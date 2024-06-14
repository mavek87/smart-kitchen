import Modal from "../base/Modal.jsx";
import {useState} from "react";
import RecipeComponent from "../recipe/RecipeComponent.jsx";
import * as uuid from "uuid";
import ButtonLarge from "../base/ButtonLarge.jsx";
import {logComponentRendering} from "../../utils/log.js";

function KitchenMenuComponent(props) {
    logComponentRendering(props);

    const [isModalAddRecipeOpen, setModalAddRecipeOpen] = useState(false);

    const addRecipeHandler = () => {
        setModalAddRecipeOpen(true);
    }

    const closeAddRecipeHandler = () => {
        setModalAddRecipeOpen(false);
    }

    const ingredient = {
        id: uuid.v4(),
        name: "",
        quantity: 0,
        ingredientQuantityUnit: "g"
    }

    const ingredients = [];
    ingredients.push(ingredient);

    return (
        <>
            <div className={"flex flex-row space-x-4"}>
                <ButtonLarge value={"Add Recipe"} onClick={addRecipeHandler}/>
            </div>
            <Modal
                title="Add Recipe"
                content={
                    <RecipeComponent
                        id={ingredient.id}
                        name={""}
                        ingredients={ingredients}
                        isModifiable={true}
                        onCloseHandler={closeAddRecipeHandler}
                    />
                }
                isOpen={isModalAddRecipeOpen}
                onCloseHandler={closeAddRecipeHandler}
            />
        </>
    );
}

export default KitchenMenuComponent;