import RecipeComponent from "../recipe/RecipeComponent.jsx";
import PropTypes from "prop-types";
import {toJsonPretty} from "../../utils/strings.js";
import KitchenMenu from "./KitchenMenu.jsx";

KitchenComponent.propTypes = {
    kitchen: {
        recipes: PropTypes.arrayOf(PropTypes.instanceOf(RecipeComponent)).isRequired
    }
};

export default function KitchenComponent(props) {
    console.log(`Rendering KitchenComponent ${toJsonPretty(props)}`);

    const {kitchen} = props;

    const recipes = kitchen.recipes.map((recipe) => (
        <div key={recipe.id}>
            <RecipeComponent
                id={recipe.id}
                name={recipe.name}
                ingredients={recipe.ingredients}
                isModifiable={false}/>
        </div>
    ));

    const view = recipes.length > 0
        ?
        <>
            <KitchenMenu />
            {recipes}
        </>
        : null;

    return (
        <section>
            {view}
        </section>
    );
}