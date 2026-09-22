function countFrequent(arr, value){
    let count  = 0;
    for (let i = 0; i < arr.length; i++){
        if (value == arr[i])
            count++;
    }
    return count;
}

function mostFrequent(arr){
    let frequent = [arr[0], countFrequent(arr, arr[0])]
    for (let i = 0; i < arr.length; i++){
        if (countFrequent(arr, arr[i]) > frequent[1]){
            frequent[0] = arr[i];
            frequent[1] = countFrequent(arr, arr[i]);
        }
    }
    console.log(`${frequent[0]} appears ${frequent[1]} times`);
}
mostFrequent([4, 2, 4, 3, 2, 4, 5]);