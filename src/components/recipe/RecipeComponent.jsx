import IngredientComponent from "../ingredient/IngredientComponent.jsx";
import * as strings from "../../utils/strings.js";

export default function RecipeComponent({name, ingredients}) {
    return (
        <section>
            <h1>{name ? strings.capitalize(name) : "Unknown recipe"}</h1>
            {
                ingredients.map((ingredient) => (
                    <IngredientComponent
                        name={ingredient.name}
                        quantity={ingredient.quantity}
                        ingredientQuantityUnit={ingredient.ingredientQuantityUnit}
                        isEnabled={false}
                    />
                ))
            }
        </section>
    );
}