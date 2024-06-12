import * as uuid from "uuid";

// TODO: remove type and placeholder and make work ...restProps
export default function Input(
    {
        id = uuid.v4(),
        type = "text",
        value,
        label,
        // onChangeTextHandler,
        // isEnabled = true,
        ...restOfProps
    }
) {
    // const onChangeText = (event) => {
    //     event.preventDefault();
    //     onChangeTextHandler(event.target.value);
    // }

    return (
        <div className={"flex items-center space-x-2"}>
            {label
                ? <label htmlFor={id} className="mr-4">
                    {label}
                </label>
                : null
            }
            <input
                id={id}
                type={type}
                // onChange={event => onChangeText(event)}
                value={value}
                {...restOfProps}
            />
        </div>
    );
}