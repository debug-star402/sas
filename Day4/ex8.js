function matrixSum(arr){
    let res = 0;
    let y = 0;
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            if (y == arr[i].length)
                y = 0;
            res += arr[i][y];
            y++;
        }
    }
    return res;
}

console.log(matrixSum([[1,2,3],[4,5,6],[7,8,9]]));