//Remove duplicates from an array
var arr = [1, 2, 2, 3, 4, 4, 5];

var uniqueArray = ((arr) => {
    // Use a Set to store unique values
    var uniqueSet = new Set(arr);

    // Convert Set back to array using spread operator
    return [uniqueSet];
})(arr);

console.log("Original Array:", arr);
console.log("Array with Duplicates Removed:", uniqueArray);