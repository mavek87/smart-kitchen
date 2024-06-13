import PropTypes from "prop-types";

Input.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string
};

export default function Input(
    {
        id,
        label,
        ...restOfProps
    }
) {
    const input = id
        ? <input id={id} {...restOfProps} />
        : <input {...restOfProps} />

    const labelForInput = label
        ?
        <label htmlFor={id} className="mr-4">
            {label}
        </label>
        : null

    return (
        <div className={"flex items-center space-x-2"}>
            {labelForInput}
            {input}
        </div>
    );
}