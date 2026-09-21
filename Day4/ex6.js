function revArr(arr){
    let i = 0;
    let j = arr.length - 1;
    let placeHolder = [];

    while (i < j){
        placeHolder[0] = arr[i];
        arr[i] = arr[j];
        arr[j] = placeHolder[0];
        i++;
        j--;
    }
    return arr;
}

console.log(revArr(["a", 1, 3, "achraf", "red", true]));