import RecipeComponent from "../recipe/RecipeComponent.jsx";
import PropTypes from "prop-types";
import {toJsonPretty} from "../../utils/strings.js";

KitchenComponent.propTypes = {
    kitchen: {
        recipes: PropTypes.arrayOf(PropTypes.instanceOf(RecipeComponent)).isRequired
    }
};

export default function KitchenComponent(props) {
    console.log(`Rendering KitchenComponent ${toJsonPretty(props)}`);

    const {kitchen} = props;

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