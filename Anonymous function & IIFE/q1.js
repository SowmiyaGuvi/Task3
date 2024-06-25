//Print odd numbers in an array
(function() {
    var array = userInput[0].split(" ");
    // Anonymous function to filter odd numbers
    var oddNumbers = function(arr) {
        return arr.filter(function(num) {
            return num % 2 !== 0;
        });
    };
    // IIFE to execute the function and print the result
    (function() {
        console.log("Odd numbers:", oddNumbers(array));
    })();
})();
