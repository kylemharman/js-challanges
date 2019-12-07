// Complete the staircase function below.
function staircase(n) {
    
    let space = [];
    let hash = [];

    for (let i = 1; i < n; i++) {
        space.push(' ')
    }
    for (let i = 0; i < n; i++) {
        hash.push('#')
        console.log(space.join('') + hash.join(''))
        space.pop();
    }
}

staircase(6);