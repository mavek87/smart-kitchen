import PropTypes from "prop-types";
import ButtonLarge from "../base/ButtonLarge.jsx";

SaveCancelButtons.propTypes = {
    cancelButtonText: PropTypes.string,
    saveButtonText: PropTypes.string,
    cancelHandler: PropTypes.func.isRequired,
    saveHandler: PropTypes.func.isRequired
}

export default function SaveCancelButtons({cancelButtonText = "Cancel", saveButtonText = "Save", cancelHandler, saveHandler}) {
    return (
        <>
            <ButtonLarge value={cancelButtonText} className={"secondary"} onClick={cancelHandler}/>
            <ButtonLarge value={saveButtonText} className={"primary"} onClick={saveHandler}/>
        </>
    );
}