//Sum of all numbers in an array

var numbers = [1, 2, 3, 4, 5];
    	var sum = (function(arr) {
    	var total = 0;
        		for (var i = 0; i < arr.length; i++) {
        		total += arr[i];
        		}
    	return total;
    	})(numbers);
    	console.log(sum);
