import IngredientComponent from "../ingredient/IngredientComponent.jsx";
import * as strings from "../../utils/strings.js";
import PropTypes from "prop-types";

RecipeComponent.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.instanceOf(IngredientComponent)).isRequired,
    isModifiable: IngredientComponent.propTypes.isEnabled
};

export default function RecipeComponent({id, name, ingredients, isModifiable}) {
    return (
        <section>
            <article>
                <h1>{name ? strings.capitalize(name) : "Unknown recipe"}</h1>
                <ul>
                    {
                        ingredients.map((ingredient) => (
                            <li key={`${id}-${ingredient.id}`}>
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
            </article>
        </section>
    );
}