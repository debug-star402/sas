function itExists(arr, value){
    for (let i = 0; i < arr.length; i++){
        if (value == arr[i])
            return true;
    }
    return false;
}

console.log(itExists([1,"Ali",3,4,5,6], "Ali"))