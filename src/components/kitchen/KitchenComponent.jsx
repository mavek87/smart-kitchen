import RecipeComponent from "../recipe/RecipeComponent.jsx";
import PropTypes from "prop-types";
import KitchenMenuComponent from "./KitchenMenuComponent.jsx";
import {logComponentRendering} from "../../utils/log.js";

KitchenComponent.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.shape({...RecipeComponent.propTypes})).isRequired
};

export default function KitchenComponent(props) {
    logComponentRendering(props);

    const {recipes} = props;

    const recipesComponents = recipes.map((recipe) => (
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
            recipesComponents.length > 0
                ?
                <>
                    <KitchenMenuComponent/>
                    {recipesComponents}
                </>
                : null
        }
    </section>;
}