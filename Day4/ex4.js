function maxNum(arr){
    let max = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}

console.log(maxNum([1,10,3,16,4,8]))