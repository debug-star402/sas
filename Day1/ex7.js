for (let i = 2; i <= 50; i++){
    let isPrime = true;
    for (let n = 2; n <= 50; n++){
        if (i === n)
            continue;
        if (i % n === 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime)
    console.log(i)
}
