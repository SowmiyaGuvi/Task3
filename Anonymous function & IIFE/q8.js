//Rotate an array by k times

const rotateArray = ((arr, k) => {
    const n = arr.length;
    k = k % n;
    // Function to reverse elements in the array from start to end index
    const reverse = (start, end) => {
        while (start < end) {
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    };
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);

    return arr;
})([1, 2, 3, 4, 5], 2);

console.log("Rotated Array:", rotateArray);