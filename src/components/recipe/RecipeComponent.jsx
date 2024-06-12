import IngredientComponent from "../ingredient/IngredientComponent.jsx";
import * as strings from "../../utils/strings.js";
import PropTypes from "prop-types";
import {toJsonPretty} from "../../utils/strings.js";
import Input from "../base/Input.jsx";

RecipeComponent.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.instanceOf(IngredientComponent)).isRequired,
    isModifiable: IngredientComponent.propTypes.isEnabled
};

export default function RecipeComponent(props) {
    console.log(`Rendering RecipeComponent ${toJsonPretty(props)}`);

    const {id, name, ingredients, isModifiable} = props;

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

    const saveHandler = () => {
        alert("Save button pressed");
    }

    const cancelHandler = () => {
        alert("Cancel button pressed");
    }

    const title = isModifiable ? <Input type={"text"} placeholder={"Recipe name"}/> : <h3>{name ? strings.capitalize(name) : "Unknown recipe"}</h3>

    return (
        <>
            <article>
                {title}
                {
                    ingredients.length > 0
                        ? <ul>{jsxIngredients}</ul>
                        : null
                }
            </article>
            {
                isModifiable ? (
                    <>
                        <input type={"button"} value={"Save"} onClick={saveHandler}/>
                        <input type={"button"} value={"Cancel"} className={"secondary"} onClick={cancelHandler}/>
                    </>
                ) : null
            }

        </>
    );
}