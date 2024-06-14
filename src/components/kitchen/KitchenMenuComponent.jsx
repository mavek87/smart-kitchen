import {useState} from "react";
import RecipeComponent from "../recipe/RecipeComponent.jsx";
import * as uuid from "uuid";
import {logComponentRendering} from "../../utils/log.js";
import ButtonLarge from "../ui/base/ButtonLarge.jsx";
import Modal from "../ui/base/Modal.jsx";

function KitchenMenuComponent(props) {
    logComponentRendering(props);

    const [isModalAddRecipeOpen, setModalAddRecipeOpen] = useState(false);

    const addRecipeHandler = () => {
        setModalAddRecipeOpen(true);
    }

    const closeAddRecipeHandler = () => {
        setModalAddRecipeOpen(false);
    }

    const ingredients = [{
        id: uuid.v4(),
        name: "",
        quantity: 0,
        ingredientQuantityUnit: "g"
    }];

    return (
        <>
            <div className={"flex flex-row space-x-4"}>
                <ButtonLarge value={"Add Recipe"} onClick={addRecipeHandler}/>
            </div>
            <Modal
                title="Add Recipe"
                content={
                    <RecipeComponent
                        id={uuid.v4()}
                        name={""}
                        ingredients={ingredients}
                        isModifiable={true}
                        onCloseHandler={closeAddRecipeHandler}
                    />
                }
                isOpen={isModalAddRecipeOpen}
                onCloseHandler={closeAddRecipeHandler}
            />
        </>
    );
}

export default KitchenMenuComponent;