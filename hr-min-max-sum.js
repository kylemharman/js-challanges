// Given five positive integers, find the minimum and maximum values that can be calculated by summing
// exactly four of the five integers. Then print the respective minimum and maximum values as a single line
// of two space-separated long integers.

const arr = [1, 2, 4, 3, 5];

function miniMaxSum(arr) {

    const answer = arr.sort((a,b) => a - b );
    let min = [...answer];
    let max = [...answer];

    min.pop();
    let minSum = min.reduce((acc,val) => acc + val);
    
    max.shift();
    let maxSum = max.reduce((acc,val) => acc + val);
    
    return `${minSum} ${maxSum}`
}

console.log(miniMaxSum(arr));