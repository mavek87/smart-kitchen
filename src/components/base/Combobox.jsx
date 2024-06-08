import * as uuid from "uuid";

export default function Combobox(
    {
        data,
        id = uuid.v4(),
        label,
        onChangeSelectionHandler,
        selectClasses,
        optionsClasses,
        isEnabled = true,
        restOfProps
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
            {label ? <label htmlFor={id}>{label}</label> : undefined}
            <select id={id} onChange={event => onChangeSelect(event)} disabled={!isEnabled} className={selectClasses} {...restOfProps}>
                {
                    data.map((element, index) => (
                        <option value={element.value} key={element.id ? element.id : index} className={optionsClasses}>
                            {element.text}
                        </option>
                    ))
                }
            </select>
        </div>

    );
};