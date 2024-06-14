import PropTypes from "prop-types";

ButtonLarge.propTypes = {
    id: PropTypes.string,
    children: PropTypes.any
};

export default function ButtonLarge({id, children, ...restOfProps}) {
    return <input id={id} type="button" {...restOfProps} >{children}</input>;
}