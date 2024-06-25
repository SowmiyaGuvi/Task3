//Convert all the strings to title caps in a string array

var stringArray = userInput[0].split(",");
// Using an IIFE and an anonymous function to convert strings to title case
    (function(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].toLowerCase().split(' ').map(function(word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(' ');
        }
    })(stringArray);
    // Output the modified array
    console.log(stringArray);
