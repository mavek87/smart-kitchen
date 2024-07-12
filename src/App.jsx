import './App.css'
import KitchenComponent from "./components/kitchen/KitchenComponent.jsx";
import {useState} from "react";
import recipesData from "./domain/recipesData.js";

function App() {
    const [recipes, setRecipes] = useState(recipesData);

    const onDeleteIngredientHandler = (recipeId, ingredientId) => {
        setRecipes(oldRecipes => {
            const recipes = [];
            oldRecipes.forEach(recipe => {
                if (recipe.id === recipeId) {
                    const ingredientsAfterDelete = recipe.ingredients.filter(ingredient => ingredient.id !== ingredientId);
                    recipes.push({
                        ...recipe,
                        ingredients: ingredientsAfterDelete
                    });
                } else {
                    recipes.push(recipe);
                }
            });
            return recipes;
        })
    }

    const onAddRecipeHandler = (recipe) => {
        setRecipes(oldRecipes => {
           return {
               ...oldRecipes,
               recipe
           }
        });
    }

    return (
        <article className={"mt-5"}>
            <header className={"text-center"}><h1>Smart Kitchen</h1></header>
            <KitchenComponent recipes={recipes} onAddRecipe={onAddRecipeHandler} onDeleteIngredient={onDeleteIngredientHandler} />
            <footer className={"text-center"}>Author: Matteo Veroni</footer>
        </article>
    )
}

export default App
