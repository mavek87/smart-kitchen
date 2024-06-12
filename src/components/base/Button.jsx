import * as uuid from "uuid";

// TODO: add prop types
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
            {...restOfProps} />
    );
}