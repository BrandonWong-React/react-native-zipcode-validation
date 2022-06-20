//validate zipcode format 20740 or 20740-5623 format
export function validateZipcode(code) {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(code);
}