function seperateArray(arr){
    let negativeArray = [];
    let positiveArray = [];
    let zeroArray = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0)
            negativeArray.push(arr[i]);
        else if (arr[i] > 0)
            positiveArray.push(arr[i]);
        else
            zeroArray.push(arr[i]);
    }

    console.log(`negative = [${negativeArray}]`);
    console.log(`zeros = [${zeroArray}]`);
    console.log(`positive = [${positiveArray}]`);
}

seperateArray([-4, 7, 0, -2, 9, 0, 3]);