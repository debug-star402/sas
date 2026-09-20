function filterOddNumber(arr, callback){
    let res = [];
    let j = 0;
    for (let i = 0; arr[i] != undefined; i++){
        if (callback(arr[i])){
            res[j] = arr[i];
            j++;
        }
    }
    return res;
}
const myCallback = num =>{
    if (num % 2 != 0)
        return true;
    return false;
}
console.log(filterOddNumber([1,2,3,4,5,6,7,8], myCallback));