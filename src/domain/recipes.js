import * as uuid from "uuid";

export const recipeCarbonara = {
    id: uuid.v4(),
    name: "Carbonara",
    isModifiable: true,
    ingredients: [
        {
            id: uuid.v4(),
            name: 'spaghetti',
            quantity: 150,
            ingredientQuantityUnit: 'g'
        },
        {
            id: uuid.v4(),
            name: 'egg',
            quantity: 100,
            ingredientQuantityUnit: 'g'
        },
        {
            id: uuid.v4(),
            name: 'pancetta',
            quantity: 50,
            ingredientQuantityUnit: 'g'
        },
        {
            id: uuid.v4(),
            name: 'pecorino',
            quantity: 10,
            ingredientQuantityUnit: 'g'
        }
    ]
}

export const recipeMatriciana = {
    id: uuid.v4(),
    name: "Matriciana",
    isModifiable: true,
    ingredients: [
        {
            id: uuid.v4(),
            name: 'spaghetti',
            quantity: 150,
            ingredientQuantityUnit: 'g'
        },
        {
            id: uuid.v4(),
            name: 'egg',
            quantity: 100,
            ingredientQuantityUnit: 'g'
        },
        {
            id: uuid.v4(),
            name: 'pancetta',
            quantity: 50,
            ingredientQuantityUnit: 'g'
        },
        {
            id: uuid.v4(),
            name: 'pecorino',
            quantity: 10,
            ingredientQuantityUnit: 'g'
        }
    ]
}

const recipes = [recipeCarbonara, recipeMatriciana];

export default recipes;