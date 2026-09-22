function countChar(str, char){
    let count = 0;
    for (let i = 0; str[i] != undefined; i++){
        if (char == str[i])
            count++;
    }
    return count;
}

console.log(countChar("Achraf", "A"))