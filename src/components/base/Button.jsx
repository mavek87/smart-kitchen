import * as uuid from "uuid";
import PropTypes from "prop-types";

Button.propTypes = {
    id: PropTypes.string,
};

export default function Button(
    {
        id = uuid.v4(),
        ...restOfProps
    }
) {
    return (
        <input
            id={id}
            type={"button"}
            {...restOfProps}
        />
    );
}