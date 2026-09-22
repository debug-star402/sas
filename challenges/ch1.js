function evenOddCounter(arr){
    let oddCount = 0;
    let evenCount = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0)
            evenCount++;
        else
            oddCount++;
    }
    console.log(`Even: ${evenCount}`);
    console.log(`Odd: ${oddCount}`);
}

evenOddCounter([1,2,3,4,5,6,7,8])