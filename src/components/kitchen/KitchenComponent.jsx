import RecipeComponent from "../recipe/RecipeComponent.jsx";
import PropTypes from "prop-types";

KitchenComponent.propTypes = {
    kitchen: {
        recipes: PropTypes.arrayOf(PropTypes.instanceOf(RecipeComponent)).isRequired
    }
};

export default function KitchenComponent({kitchen}) {
    const recipes = kitchen.recipes.map((recipe) => (
        <li key={recipe.id} className={"list-none"}>
            <RecipeComponent
                id={recipe.id}
                name={recipe.name}
                ingredients={recipe.ingredients}
                isModifiable={false}/>
        </li>
    ));

    const view = recipes.length > 0
        ? <ul>{recipes}</ul>
        : null;

    return (
        <section>
            {view}
        </section>
    );
}