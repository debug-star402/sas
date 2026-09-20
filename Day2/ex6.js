function factorial(n){
    let i = 1;
    let res = n;
    if (n === 0)
        return 1;
    while (i < n){
        res = res * i;
        i++;
    }
    return res;
}

console.log(factorial(10))