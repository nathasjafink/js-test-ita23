/**
 * This function checks if a number is even.
 *
 * @param {number} n - The number to be checked.
 * @returns {boolean} - True if the number is even, otherwise false.
 *
 * Usage:
 * const result = isEven(4); // result will be true
 * const anotherResult = isEven(7); // anotherResult will be false
 */

function isEven(number) {
    const n = number;
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
const total =isEven(4);
console.log(total);
const anothertotal = isEven(7);
console.log(anothertotal);

/**
 * This function checks if a number is within a range.
 *
 * @param {number} n - The number to check.
 * @param {number} min - The minimum range (included)
 * @param {number} max - The maximum range (included)
 * @returns {boolean} - True if the number is within range, false otherwise.
 *
 * Usage:
 * const inRange = isWithinRange(5, 1, 10); // inRange will be true
 * const outOfRange = isWithinRange(15, 1, 10); // outOfRange will be false
 */

function isWithinRange(n, min, max) {
    const number = n;
    return ((number-min)*(number-max) <= 0);
}
const inRange = isWithinRange(5,1,10);
console.log(inRange);
const outOfRange = isWithinRange(15,1,10);

/**
 * This function checks if a string contains the string "ba"
 *
 * @param {string} string - The string to check.
 * @returns {boolean} - True if the string contains the string ba
 *
 * Usage:
 * const bananaContainsBa = stringContainsBa("banana"); // true
 * const harborContainsBa = isWithinRange("harbor"); // false
 * const harborContainsBa = isWithinRange("habanana"); // true
 */

function stringContainsBa(string) {
    const checkString = string.includes("ba");
    return checkString;
}
const total1 = stringContainsBa("Banana");
console.log(total1);
const total2 = stringContainsBa("harbor");
console.log(total2);






