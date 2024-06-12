function Modal({title, content, isOpen, onCloseHandler}) {

    const modalContent = <article>
        <header>
            <button aria-label="Close" rel="prev" onClick={onCloseHandler}></button>
            <p>
                <strong>{title}</strong>
            </p>
        </header>
        <p>
            {content}
        </p>
    </article>

    const modalView = isOpen
        ? <dialog open>{modalContent}</dialog>
        : <dialog>{modalContent}</dialog>;

    return modalView;
}

export default Modal;