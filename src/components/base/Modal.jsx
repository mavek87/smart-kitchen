// TODO: add prop types

import ReactDOM from 'react-dom';

export default function Modal({title, content, isOpen, onCloseHandler}) {
    const modalContent = <article>
        <header>
            <button aria-label="Close" rel="prev" onClick={onCloseHandler} />
            <h4>{title}</h4>
        </header>
        <p>
            {content}
        </p>
    </article>

    const modalRoot = document.getElementById("modal-root");

    const dialog = isOpen
        ? <dialog open>{modalContent}</dialog>
        : null

    return ReactDOM.createPortal(dialog, modalRoot);
}