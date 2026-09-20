const isEmpty = str =>{
    let i = 0;
    while (str[i] !== undefined){
        if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')){
            return false;
        }
        i++;
    }
    return true;
}
console.log(isEmpty("      a   "))