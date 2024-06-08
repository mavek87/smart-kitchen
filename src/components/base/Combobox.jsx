const Combobox = ({data, onChangeSelectionHandler, selectClasses, optionsClasses}) => {
    const onChangeSelect = (event) => {
        event.preventDefault();

        const target = event.target;
        const {id, value, selectedIndex} = target;
        const text = target.options[selectedIndex].text

        onChangeSelectionHandler({id, value, text});
    }

    return (
        <select onChange={event => onChangeSelect(event)} className={selectClasses}>
            {
                data.map((element, index) => (
                    <option value={element.value} key={element.id ? element.id : index} className={optionsClasses}>
                        {element.text}
                    </option>
                ))
            }
        </select>
    );
};

export default Combobox;