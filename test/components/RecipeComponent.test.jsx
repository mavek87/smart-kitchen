import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom/vitest"
import * as uuid from "uuid";
import RecipeComponent from "../../src/components/recipe/RecipeComponent.jsx";
import {recipeCarbonara} from "../../src/domain/recipes.js";

describe("Ingredient Component Tests", () => {

    it("should render no elements if the ingredients array is empty", async () => {
        const recipeName = "matriciana";
        const ingredients = [];

        render(
            <RecipeComponent
                id={uuid.v4()}
                name={recipeName}
                ingredients={ingredients}
            />
        )

        // Shows the DOM structure
        screen.debug();

        const recipeTitle = screen.queryByRole('heading', { name: new RegExp(recipeName, 'i'), level: 1 });
        expect(recipeTitle).toBeInTheDocument();

        const ul = await screen.queryByRole("list");
        expect(ul).not.toBeInTheDocument();
    })

    it("should render the elements if the ingredients array contains elements", async () => {
        render(
            <RecipeComponent
                id={recipeCarbonara.id}
                name={recipeCarbonara.name}
                ingredients={recipeCarbonara.ingredients}
            />
        )

        // Shows the DOM structure
        screen.debug();

        const lists = screen.queryAllByRole("list");
        expect(lists.length).toBe(1);
    })

})