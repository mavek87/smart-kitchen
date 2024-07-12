import RecipeComponent from "../recipe/RecipeComponent.jsx";
import PropTypes from "prop-types";
import KitchenMenuComponent from "./KitchenMenuComponent.jsx";
import {logComponentRendering} from "../../utils/log.js";

KitchenComponent.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.shape({...RecipeComponent.propTypes})).isRequired,
    onDeleteIngredient: PropTypes.func,
    onAddRecipe: PropTypes.func
};

export default function KitchenComponent(props) {
    logComponentRendering(props);

    const {recipes, onDeleteIngredient, onAddRecipe} = props;

    const recipesComponents = recipes.map((recipe) => (
        <div key={recipe.id}>
            <RecipeComponent
                id={recipe.id}
                name={recipe.name}
                ingredients={recipe.ingredients}
                isRecipeEditable={false}
                onDeleteIngredient={onDeleteIngredient}
            />
        </div>
    ));

    return <section>
        {
            recipesComponents.length > 0
                ?
                <>
                    <KitchenMenuComponent onAddRecipe={onAddRecipe} />
                    {recipesComponents}
                </>
                : null
        }
    </section>;
}