import PropTypes from "prop-types";

Button.propTypes = {
    id: PropTypes.string,
};

export default function Button({id, ...restOfProps}) {
    return <input id={id} type="button" {...restOfProps} />;
}