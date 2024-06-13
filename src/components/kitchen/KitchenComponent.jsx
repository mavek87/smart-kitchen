import RecipeComponent from "../recipe/RecipeComponent.jsx";
import PropTypes from "prop-types";
import KitchenMenuComponent from "./KitchenMenuComponent.jsx";
import {logComponentRendering} from "../../utils/log.js";

KitchenComponent.propTypes = {
    kitchen: PropTypes.shape({
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    })
};

export default function KitchenComponent(props) {
    logComponentRendering(props);

    const {kitchen} = props;

    const recipes = kitchen.recipes.map((recipe) => (
        <div key={recipe.id}>
            <RecipeComponent
                id={recipe.id}
                name={recipe.name}
                ingredients={recipe.ingredients}
                isModifiable={false}
            />
        </div>
    ));

    return <section>
        {
            recipes.length > 0
                ?
                <>
                    <KitchenMenuComponent/>
                    {recipes}
                </>
                : null
        }
    </section>;
}