import PropTypes from "prop-types";

ButtonSmall.propTypes = {
    id: PropTypes.string,
    children: PropTypes.any
};

export default function ButtonSmall({id, children, ...restOfProps}) {
    return <button id={id} {...restOfProps}>{children}</button>;
}