import * as uuid from "uuid";

export default function Input(
    {
        id = uuid.v4(),
        value = "",
        label,
        onChangeTextHandler,
        restOfProps,
        isEnabled = true
    }
) {

    const onChangeText = (event) => {
        event.preventDefault();
        onChangeTextHandler(event.target.value);
    }

    return (
        <div className={"flex items-center space-x-2"}>
            {label ?
                <label htmlFor={id} className="mr-4">
                    {label}
                </label>
                : undefined
            }
            <input
                type="text"
                id={id}
                onChange={event => onChangeText(event)}
                value={value}
                disabled={!isEnabled}
                {...restOfProps}
            />
        </div>
    );
};