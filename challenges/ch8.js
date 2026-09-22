function isDuplicate(arr, value){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (value == arr[i])
            count++;
    }
    return count
}

function filteredArr(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (isDuplicate(newArr, arr[i]) == 0)
            newArr.push(arr[i]);
    }
    return newArr;
}

console.log(filteredArr([1, 2, 2, 3, 1, 4, 3]))