import Modal from "../../base/Modal.jsx";
import IngredientComponent from "../../../ingredient/IngredientComponent.jsx";
import SaveCancelButtons from "../save_cancel_buttons/SaveCancelButtons.jsx";
import PropTypes from "prop-types";

ModalEditIngredient.propTypes = {
    recipeId: PropTypes.string.isRequired,
    ingredient: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        quantity: PropTypes.number,
        ingredientQuantityUnit: PropTypes.string
    }),
    onSaveIngredient: PropTypes.func.isRequired,
    onCancelEditIngredient: PropTypes.func.isRequired,
    onDeleteIngredient: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool,
};

export default function ModalEditIngredient({recipeId, ingredient, onSaveIngredient, onCancelEditIngredient, onDeleteIngredient, isModalOpen}) {
    const {id, name, quantity, ingredientQuantityUnit} = ingredient;

    return <Modal
        title={`Edit ingredient '${name}'`}
        content={
            <article className={"max-w-6xl"}>
                <IngredientComponent
                    recipeId={recipeId}
                    id={id}
                    name={name}
                    quantity={quantity}
                    ingredientQuantityUnit={ingredientQuantityUnit}
                    isEnabled={true}
                    onDeleteIngredient={onDeleteIngredient}
                />
                <footer className={"flex flex-row space-x-4"}>
                    <SaveCancelButtons
                        saveButtonText={"Save Ingredient"}
                        saveHandler={onSaveIngredient}
                        cancelHandler={onCancelEditIngredient}
                    />
                </footer>
            </article>
        }
        isModalOpen={isModalOpen}
        onCloseModal={onCancelEditIngredient}
    />;
}