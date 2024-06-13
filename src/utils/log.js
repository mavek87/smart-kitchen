import {toJsonPretty} from "./strings.js";

export function logComponentRendering(props) {
    // dont log component rendering in production!
    if (!import.meta.env.PROD) {
        const stack = new Error().stack;
        const stackLines = stack.split('\n');

        if (stackLines.length >= 3) {
            // La terza linea contiene la funzione chiamante
            const callerLine = stackLines[2];

            // Estrarre il nome della funzione chiamante
            const callerNameMatch = callerLine.match(/at (\w+)/);
            if (callerNameMatch && callerNameMatch.length > 1) {
                const callerFunction = callerNameMatch[1];
                console.log(`Render ${callerFunction} | props => ${toJsonPretty(props)}`);
            } else {
                console.log(`Unknown function caller`);
            }
        } else {
            console.log(`Unknown function caller`);
        }
    }
}