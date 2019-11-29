// 17 28 30
// 99 16 8

// 2 1

function compareTriplets(a, b) {
    let results = [0,0];

    for(let i = 0; i < a.length; i++) {
        if(a[i] === b[i]);
        else if(a[i] > b[i]) results[0] += 1;
        else results[1] += 1;
    }
    
    console.log(results)
    return results;
    
}

compareTriplets([17, 3, 30],
                [17, 32, 8])