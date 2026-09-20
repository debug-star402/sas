function pairNb(min, max){
    while (min <= max){
        if (min % 2 == 0)
            console.log(min);
        min++;
    }
}
pairNb(10, 20);