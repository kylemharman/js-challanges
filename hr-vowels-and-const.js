const array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const vowelsAndConst = s => {

    let arr = s.split('')
    let vowels = []
    let cont = [] 
    
    for (let i = 0; i < arr.length; i++) {
        if( arr[i]==='a' || arr[i]==='e' || arr[i]==='i' || arr[i]==='o' || arr[i]==='u' ) vowels.push(arr[i])
        else cont.push(arr[i])   
    } 

    return [...vowels, ...cont].forEach(e => console.log(e));
    
}

vowelsAndConst('javascriptloops');