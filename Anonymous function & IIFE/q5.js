//Return all the palindromes in an array

(function() {
    var array = ["radar", "apple", "level", "banana", "madam"];

    var palindromes = array.filter(function(word) {
        return word === word.split('').reverse().join('');
    });

    console.log("Palindromes:", palindromes);
})();
