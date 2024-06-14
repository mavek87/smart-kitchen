import PropTypes from "prop-types";

ButtonLarge.propTypes = {
    id: PropTypes.string,
};

export default function ButtonLarge({id, ...restOfProps}) {
    return <input id={id} type="button" {...restOfProps} />;
}