import Modal from "../../base/Modal.jsx";
import IngredientComponent from "../../../ingredient/IngredientComponent.jsx";
import SaveCancelButtons from "../save_cancel_buttons/SaveCancelButtons.jsx";
import PropTypes from "prop-types";

ModalEditIngredient.propTypes = {
    ingredient: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        quantity: PropTypes.number,
        ingredientQuantityUnit: PropTypes.string
    }),
    saveHandler: PropTypes.func,
    cancelHandler: PropTypes.func,
    isOpen: PropTypes.bool
};

export default function ModalEditIngredient({ingredient, saveHandler, cancelHandler, isOpen}) {
    const {id, name, quantity, ingredientQuantityUnit} = ingredient;

    return <Modal
        title={`Edit ingredient '${name}'`}
        content={
            <article className={"max-w-6xl"}>
                <IngredientComponent
                    id={id}
                    name={name}
                    quantity={quantity}
                    ingredientQuantityUnit={ingredientQuantityUnit}
                    isEnabled={true}
                />
                <footer className={"flex flex-row space-x-4"}>
                    <SaveCancelButtons
                        saveButtonText={"Save Ingredient"}
                        saveHandler={saveHandler}
                        cancelHandler={cancelHandler}
                    />
                </footer>
            </article>
        }
        isOpen={isOpen}
        onCloseHandler={cancelHandler}
    />;
}