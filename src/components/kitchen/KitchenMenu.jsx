import Modal from "../base/Modal.jsx";
import {useState} from "react";
import RecipeComponent from "../recipe/RecipeComponent.jsx";
import * as uuid from "uuid";

function KitchenMenu() {
    const [isModalOpen, setModalOpen] = useState(false);

    const addRecipeHandler = () => {
        console.log("addRecipeHandler");
        setModalOpen(prevState => !prevState)
    }

    const ingredient = {
        id: uuid.v4(),
        name: "",
        quantity: 0,
        ingredientQuantityUnit: "g"}

    const ingredients = [];
    ingredients.push(ingredient);

    const addRecipeContent = <>
        <RecipeComponent
            id={uuid.v4()} name={""}
            ingredients={ingredients}
            isModifiable={true}
        />
    </>

    return (
        <>
            <div className={"flex flex-row space-x-4"}>
                <input type={"button"} value={"Add Recipe"} onClick={addRecipeHandler}/>
            </div>
            {/*TODO: use portal?*/}
            <Modal
                title="Add Recipe"
                content={addRecipeContent}
                isOpen={isModalOpen}
                onCloseHandler={() => setModalOpen(false)}
            />
        </>
    );
}

export default KitchenMenu;