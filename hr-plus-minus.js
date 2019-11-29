// You must print the following 3 lines:

// A decimal representing of the fraction of positive numbers in the array compared to its size.
// A decimal representing of the fraction of negative numbers in the array compared to its size.
// A decimal representing of the fraction of zeros in the array compared to its size.

// input
// const arr = [-4, 3, -9, 0, 4, 1]

// expected output
// 0.500000
// 0.333333
// 0.166667

const arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    
    const length = arr.length;
    let negative = 0;
    let neutral = 0;
    let positive = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 ) {
            positive += 1;
        }
        else if (arr[i] < 0) {
            negative += 1;
        }
        else {
            neutral += 1;
        } 
    }

    let negativePercentage = negative / length;
    let positivePercentage = positive / length;
    let neutralPercentage = neutral / length;

    console.log(positivePercentage.toFixed(6))
    console.log(negativePercentage.toFixed(6))
    console.log(neutralPercentage.toFixed(6))
}

plusMinus(arr) 
