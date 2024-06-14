import * as uuid from "uuid";
import PropTypes from "prop-types";

Combobox.propTypes = {
    id: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired,
    label: PropTypes.string,
    onChangeSelectionHandler: PropTypes.func,
    selectClasses: PropTypes.string,
    optionsClasses: PropTypes.string
}

export default function Combobox(
    {
        id = uuid.v4(),
        data,
        label,
        onChangeSelectionHandler,
        selectClasses,
        optionsClasses,
        ...restOfProps
    }
) {
    const onChangeSelect = (event) => {
        event.preventDefault();

        const target = event.target;
        const {id, value, selectedIndex} = target;
        const text = target.options[selectedIndex].text

        onChangeSelectionHandler({id, value, text});
    }

    return (
        <div className={"flex items-center space-x-6"}>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <select
                id={id}
                onChange={event => onChangeSelect(event)}
                className={selectClasses}
                {...restOfProps}
            >
                {
                    data.map((element, index) => (
                        <option
                            value={element.value}
                            key={element.id ? element.id : index}
                            className={optionsClasses}
                        >
                            {element.text}
                        </option>
                    ))
                }
            </select>
        </div>

    );
}