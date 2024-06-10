import IngredientComponent from "../ingredient/IngredientComponent.jsx";
import * as strings from "../../utils/strings.js";
import PropTypes from "prop-types";
import {toJsonPretty} from "../../utils/strings.js";

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

    return (
        <article>
            <h1>{name ? strings.capitalize(name) : "Unknown recipe"}</h1>
            {
                ingredients.length > 0
                    ? <ul>{jsxIngredients}</ul>
                    : null
            }
        </article>
    );
}