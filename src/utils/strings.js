export function capitalize(str) {
    return str
        ? str.charAt(0).toUpperCase() + str.slice(1)
        : str;
}

export function toJson(str) {
    return JSON.stringify(str);
}

export function toJsonPretty (str){
    return JSON.stringify(str, null, 2)
}