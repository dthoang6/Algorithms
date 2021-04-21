/**check if the string ends with the given target, can solve with endsWith() built in method
 * input: string and target string
 * output: true or false
 */
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}