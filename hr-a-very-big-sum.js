// Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// Sample Input

// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005

// Output

// 5000000015

// function aVeryBigSum(ar) {
    

// }

const aVeryBigSum = ar => ar.reduce((acc,val) => acc + val);

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))