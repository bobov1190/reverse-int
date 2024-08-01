module.exports = function reverse(n) {
    // If number is negative, i am making it positive
    if (n < 0) {
        n *= -1;
    }
    // String - to make our number to typeof string
    // split - to make an array
    // reverse - to reverse the array
    // join - to make it back to string and it is necessary to add "" into a ()
    // Number - to make it back to number
    return Number(String(n).split("").reverse().join(""));
};
