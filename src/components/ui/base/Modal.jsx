import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    isOpen: PropTypes.bool,
    onCloseModal: PropTypes.func
};

export default function Modal(
    {
        title,
        content,
        isModalOpen = false,
        onCloseModal = () => {
        }
    }
) {
    const modalContent = <article className={"max-w-6xl"}>
        <header>
            <button aria-label="Close" rel="prev" onClick={onCloseModal}/>
            <h4>{title}</h4>
        </header>
        <div className={"flex justify-center"}>{content}</div>
    </article>

    const dialog = isModalOpen
        ? <dialog open>{modalContent}</dialog>
        : null

    return ReactDOM.createPortal(dialog, document.getElementById("modal-root"));
}