import * as uuid from "uuid";
import PropTypes from "prop-types";

Input.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string
};

export default function Input(
    {
        id = uuid.v4(),
        label,
        ...restOfProps
    }
) {
    return (
        <div className={"flex items-center space-x-2"}>
            {label ?
                <label htmlFor={id} className="mr-4">
                    {label}
                </label>
                : null
            }
            <input
                id={id}
                {...restOfProps}
            />
        </div>
    );
}