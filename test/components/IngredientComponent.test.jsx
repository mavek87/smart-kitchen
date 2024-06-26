import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react"
import IngredientComponent from "../../src/components/ingredient/IngredientComponent.jsx";
import "@testing-library/jest-dom/vitest"
import * as uuid from "uuid";

describe("Ingredient Component Tests", () => {

    it("should render two textbox (input) and a combobox (select)", async () => {

        const ingredientName = "provola";
        const ingredientQuantity = 1;
        render(
            <IngredientComponent
                id={uuid.v4()}
                name={ingredientName}
                quantity={ingredientQuantity}
                ingredientQuantityUnit={"g"}
            />
        )

        // Shows the DOM structure
        screen.debug();

        const txtIngredientName = await screen.getByRole("textbox");
        expect(txtIngredientName.value).toBe(ingredientName);

        const txtIngredientQuantity = await screen.getByRole('spinbutton')
        expect(+txtIngredientQuantity.value).toBe(ingredientQuantity);

        const combobox = await screen.getByRole("combobox");
        expect(combobox).toBeInTheDocument();
    })

})