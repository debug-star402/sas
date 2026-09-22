function secondMaxNumber(arr){
    let largest = 0;
    let secondLargest = 0;
    for (let i = 0; i < arr.length; i++){
        if (largest < arr[i])
            largest = arr[i];
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == largest)
            continue;
        if (secondLargest < arr[i])
            secondLargest = arr[i];
    }
    return secondLargest;
}

console.log(secondMaxNumber([12, 5, 31, 8, 19]));