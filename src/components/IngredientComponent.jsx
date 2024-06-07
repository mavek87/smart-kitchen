export default function IngredientComponent() {
    return (
        <section>
            <h3>Ingredient</h3>
            <label htmlFor="ingredient-name">Ingredient name:</label>
            <input type="text" id="ingredient-name"/>

            <label htmlFor="ingredient-quantity">Ingredient quantity:</label>
            <input type="text" id="ingredient-quantity"/>

            <label htmlFor="ingredient-quantity-unit">Ingredient quantity unit:</label>
            <input type="text" id="ingredient-quantity-unit"/>
        </section>
    )
}