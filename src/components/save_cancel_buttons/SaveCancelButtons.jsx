import ButtonLarge from "../base/ButtonLarge.jsx";
import PropTypes from "prop-types";

SaveCancelButtons.propTypes = {
    cancelButtonText: PropTypes.string,
    saveButtonText: PropTypes.string,
    cancelHandler: PropTypes.func.required,
    saveHandler: PropTypes.func.required
}

export default function SaveCancelButtons({cancelButtonText = "Cancel", saveButtonText = "Save", cancelHandler, saveHandler}) {
    return (
        <>
            <ButtonLarge value={cancelButtonText} className={"secondary"} onClick={cancelHandler}/>
            <ButtonLarge value={saveButtonText} className={"primary"} onClick={saveHandler}/>
        </>
    );
}