import IngredientComponent from "../ingredient/IngredientComponent.jsx";
import * as strings from "../../utils/strings.js";
import PropTypes from "prop-types";

export default function RecipeComponent({name, ingredients, isModifiable}) {
    return (
        <section>
            <h1>{name ? strings.capitalize(name) : "Unknown recipe"}</h1>
            {
                ingredients.map((ingredient) => (
                    <ul>
                        <li>
                            <IngredientComponent
                                name={ingredient.name}
                                quantity={ingredient.quantity}
                                ingredientQuantityUnit={ingredient.ingredientQuantityUnit}
                                isEnabled={isModifiable}
                            />
                        </li>
                    </ul>

                ))
            }
        </section>
    );
}

RecipeComponent.propTypes = {
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(
        PropTypes.shape({
            name: IngredientComponent.propTypes.name,
            quantity: IngredientComponent.propTypes.quantity,
            ingredientQuantityUnit: IngredientComponent.propTypes.ingredientQuantityUnit,
        })
    ).isRequired
};