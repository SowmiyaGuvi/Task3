//Return median of two sorted arrays of the same size.
var arr1 = [1, 3, 5];
var arr2 = [2, 4, 6];

var median = ((a1, a2) => {
    // Concatenate and sort the arrays
    var combined = [...a1, ...a2].sort((a, b) => a - b);
    var totalLength = combined.length;

    // Calculate median
    if (totalLength % 2 === 0) {
        // Even length case
        var midIndex1 = totalLength / 2 - 1;
        var midIndex2 = totalLength / 2;
        return (combined[midIndex1] + combined[midIndex2]) / 2;
    } else {
        // Odd length case
        var midIndex = Math.floor(totalLength / 2);
        return combined[midIndex];
    }
})(arr1, arr2);

console.log("Median:", median);