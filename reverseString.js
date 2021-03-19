function reverseString(str) {
    let arr = [...str];
    str = "";
    for (let i = arr.length - 1; i >= 0; i--) {
       str += arr[i]; 
    }
    return str;
}
//solution 2
function reverseString2(str) {
    str.split("");
    str.reverse();
    str.join("");
    return str;
}