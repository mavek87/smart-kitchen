import IngredientComponent from "../ingredient/IngredientComponent.jsx";
import * as strings from "../../utils/strings.js";
import PropTypes from "prop-types";

export default function RecipeComponent({name, ingredients, isModifiable}) {
    return (
        <section>
            <h1>{name ? strings.capitalize(name) : "Unknown recipe"}</h1>
            <ul>
                {
                    ingredients.map((ingredient) => (
                        <li key={`list-${ingredient.id}`}>
                            <IngredientComponent
                                id={ingredient.id}
                                name={ingredient.name}
                                quantity={ingredient.quantity}
                                ingredientQuantityUnit={ingredient.ingredientQuantityUnit}
                                isEnabled={isModifiable}
                            />
                        </li>

                    ))
                }
            < /ul>

        </section>
    );
}

RecipeComponent.propTypes = {
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(
        PropTypes.shape({
            id: IngredientComponent.propTypes.id,
            name: IngredientComponent.propTypes.name,
            quantity: IngredientComponent.propTypes.quantity,
            ingredientQuantityUnit: IngredientComponent.propTypes.ingredientQuantityUnit,
            isModifiable: IngredientComponent.propTypes.isEnabled
        })
    ).isRequired
};