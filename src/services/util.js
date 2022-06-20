export function validateZipcode(code) {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(code);
}