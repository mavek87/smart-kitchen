import {useState} from "react";
import RecipeComponent from "../recipe/RecipeComponent.jsx";
import * as uuid from "uuid";
import {logComponentRendering} from "../../utils/log.js";
import ButtonLarge from "../ui/base/ButtonLarge.jsx";
import Modal from "../ui/base/Modal.jsx";

const initialStateIngredients = [{
    id: uuid.v4(),
    name: "",
    quantity: 0,
    ingredientQuantityUnit: "g"
}];

function KitchenMenuComponent(props) {
    logComponentRendering(props);

    const [ingredients, setIngredients] = useState(initialStateIngredients);
    const [isModalAddRecipeOpen, setModalAddRecipeOpen] = useState(false);

    const addRecipeHandler = () => {
        setModalAddRecipeOpen(true);
    }

    const closeAddRecipeHandler = () => {
        setModalAddRecipeOpen(false);
        setIngredients(initialStateIngredients);
    }

    const onDeleteNotSavedIngredientHandler = (recipeId, ingredientId) => {
        setIngredients(oldIngredients =>
            oldIngredients.filter(ingredient => ingredient.id !== ingredientId)
        );
    }

    return (
        <>
            <div className={"flex flex-row space-x-4"}>
                <ButtonLarge value={"Add Recipe"} onClick={addRecipeHandler}/>
            </div>
            <Modal
                title="Add Recipe"
                content={
                    <RecipeComponent
                        id={initialStateIngredients[0].id}
                        name={initialStateIngredients[0].name}
                        ingredients={ingredients}
                        isRecipeEditable={true}
                        onCloseRecipe={closeAddRecipeHandler}
                        onDeleteIngredient={onDeleteNotSavedIngredientHandler}
                    />
                }
                isModalOpen={isModalAddRecipeOpen}
                onCloseModal={closeAddRecipeHandler}
            />
        </>
    );
}

export default KitchenMenuComponent;