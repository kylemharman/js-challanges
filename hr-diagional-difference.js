// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// Sample Input

// 11 2 4
// 4 5 6
// 10 8 -12

// Sample Output

// 15

function diagonalDifference(arr) {
    const arrlength = arr[0].length;
    let a = 0;
    let b = 0;

    for (let i = 0, j = (arrlength - 1) ; i < arrlength, j > -1; i++, j--) {
        a += arr[i][i];
        b += arr[i][j];
    }
    
    return a > b ? a - b : b - a;
}
console.log(diagonalDifference([
                                [11, 2, 4],
                                [4, 5, 6],
                                [10, 8, -12]
                                ]))


