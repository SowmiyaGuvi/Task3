//Return all the prime numbers in an array

(function() {
    var numbers = [1, 2, 3, 4, 5, 6]; // Sample array of numbers
    var primeNumbers = (function(arr) {
        var primes = [];
        for (var i = 0; i < arr.length; i++) {
            var isPrime = true;
        for (var j = 2; j <= Math.sqrt(arr[i]); j++) {
            if (arr[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && arr[i] > 1) {
            primes.push(arr[i]);
        }
    }
    return primes;
})(numbers);

console.log(primeNumbers); // Output the prime numbers
})();
