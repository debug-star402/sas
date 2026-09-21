function isDuplicate(arr, value){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (value == arr[i])
            count++;
    }
    if (count > 1)
        return false;
    return true;
}

function filteredArr(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (isDuplicate(arr, arr[i]))
            newArr.push(arr[i]);
    }
    return newArr;
}

console.log(filteredArr([1,1, 2, 2, 2, 5,5, 4, 4, 6,6, 7, 7]))