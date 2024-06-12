// TODO: add prop types

export default function Modal({title, content, isOpen, onCloseHandler}) {
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

    return isOpen
        ? <dialog open>{modalContent}</dialog>
        : <dialog>{modalContent}</dialog>;
}