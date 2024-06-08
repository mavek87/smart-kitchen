import * as uuid from "uuid";

export default function Input(
    {
        id = uuid.v4(),
        label,
        onChangeTextHandler,
        restOfProps
    }
) {
    const onChangeText = (event) => {
        event.preventDefault();
        onChangeTextHandler(event.target.value);
    }

    return (
        <>
            {label ? <label htmlFor={id}>{label}</label> : undefined}
            <input type="text" id={id} {...restOfProps} onChange={event => onChangeText(event)}/>
        </>

    );
};