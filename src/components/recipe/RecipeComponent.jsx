import IngredientComponent from "../ingredient/IngredientComponent.jsx";
import * as strings from "../../utils/strings.js";
import PropTypes from "prop-types";
import Input from "../base/Input.jsx";
import Button from "../base/Button.jsx";
import {useState} from "react";
import {logComponentRendering} from "../../utils/log.js";

RecipeComponent.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.instanceOf(IngredientComponent)).isRequired,
    isModifiable: IngredientComponent.propTypes.isEnabled,
    onCloseHandler: PropTypes.func
};

export default function RecipeComponent(props) {
    logComponentRendering(props);

    const {id, name, ingredients, isModifiable, onCloseHandler} = props;
    const [recipeName, setRecipeName] = useState("");

    const saveHandler = () => {
        console.log(`Saving Recipe ${recipeName}`);
    }

    const cancelHandler = () => {
        console.log(`Cancel Recipe ${recipeName}`);
        if (onCloseHandler) {
            onCloseHandler();
        }
    }

    const jsxIngredients = ingredients.map((ingredient) => (
        <li key={`${id}-${ingredient.id}`}>
            <IngredientComponent
                id={ingredient.id}
                name={ingredient.name}
                quantity={ingredient.quantity}
                ingredientQuantityUnit={ingredient.ingredientQuantityUnit}
                isEnabled={isModifiable}
            />
        </li>
    ));

    const recipeHeader = isModifiable ?
        <Input
            type={"text"}
            placeholder={"Recipe name"}
            value={recipeName}
            onChange={(event) => setRecipeName(event.target.value)}
        />
        : <h3>{name ? strings.capitalize(name) : "Unknown recipeName"}</h3>

    return (
        <article>
            <header>{recipeHeader}</header>
            {
                ingredients && ingredients.length > 0
                    ? <ol>{jsxIngredients}</ol>
                    : null
            }
            {
                isModifiable
                    ?
                    <footer>
                        <div className={"flex flex-row space-x-4"}>
                            <Button value={"Cancel"} className={"secondary"} onClick={cancelHandler}/>
                            <Button value={"Save"} onClick={saveHandler}/>
                        </div>
                    </footer>
                    : null
            }
        </article>
    );
}