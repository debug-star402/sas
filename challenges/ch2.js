function maxNumber(arr){
    let res = 0;
    for (let i = 0; i < arr.length; i++){
        if (res < arr[i])
            res = arr[i];
    }
    return res;
}

console.log(maxNumber([12, 5, 31, 8, 19]));