function flatArr(arr){
    let newArr = [];
    let y = 0;
    for (let i = 0; i < arr.length; i++){
        if (!Array.isArray(arr[i])){
            newArr[y] = arr[i];
            y++;
        }
        else if (Array.isArray(arr[i])){
            let x = 0;
            while (x < arr[i].length){
                newArr[y] = arr[i][x];
                y++;
                x++;
            }
        }
    }
    return newArr;
}

console.log(flatArr([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]  
]));
