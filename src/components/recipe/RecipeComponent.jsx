import IngredientComponent from "../ingredient/IngredientComponent.jsx";
import * as strings from "../../utils/strings.js";
import PropTypes from "prop-types";
import {useState} from "react";
import {logComponentRendering} from "../../utils/log.js";
import Input from "../ui/base/Input.jsx";
import SaveCancelButtons from "../ui/composed/save_cancel_buttons/SaveCancelButtons.jsx";

RecipeComponent.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.shape({...IngredientComponent.propTypes})).isRequired,
    isRecipeModifiable: IngredientComponent.propTypes.isEnabled,
    onCloseRecipe: PropTypes.func,
    onDeleteIngredient: PropTypes.func
};

export default function RecipeComponent(props) {
    logComponentRendering(props);

    const {id, name, ingredients, isRecipeModifiable, onCloseRecipe, onDeleteIngredient} = props;
    const [recipeName, setRecipeName] = useState("");

    const saveHandler = () => {
        console.log(`Saving Recipe ${recipeName}`);
    }

    const cancelHandler = () => {
        console.log(`Cancel Recipe ${recipeName}`);
        if (onCloseRecipe) {
            onCloseRecipe();
        }
    }

    const jsxIngredients = ingredients.map((ingredient) => (
        <li key={`${id}-${ingredient.id}`}>
            <IngredientComponent
                recipeId={id}
                id={ingredient.id}
                name={ingredient.name}
                quantity={ingredient.quantity}
                ingredientQuantityUnit={ingredient.ingredientQuantityUnit}
                onDeleteIngredient={onDeleteIngredient}
                isEnabled={isRecipeModifiable}
            />
        </li>
    ));

    const recipeHeader = isRecipeModifiable ?
        <Input
            type={"text"}
            placeholder={"Recipe name"}
            value={recipeName}
            onChange={(event) => setRecipeName(event.target.value)}
        />
        : <h3>{name ? strings.capitalize(name) : "Unknown recipeName"}</h3>

    return (
        <article className={"max-w-6xl"}>
            <header>{recipeHeader}</header>
            {
                (ingredients?.length ?? 0) > 0
                    ? <ol>{jsxIngredients}</ol>
                    : null
            }
            {
                isRecipeModifiable
                    ?
                    <footer className={"flex flex-row space-x-4"}>
                        <SaveCancelButtons
                            saveButtonText={"Save Recipe"}
                            saveHandler={saveHandler}
                            cancelHandler={cancelHandler}
                        />
                    </footer>
                    : null
            }
        </article>
    );
}