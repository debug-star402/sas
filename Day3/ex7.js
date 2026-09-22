function strCapitalize(str){
    let res = ""
    for (let i = 0; i < str.length; i++){
        if (i === 0){
            if (str[i] >= 'a' && str[i] <= 'z')
                res += str[i].toUpperCase();
        }
        else if (str[i] >= 'a' && str[i] <= 'z' && !((str[i - 1] >= 'a' &&
             str[i - 1] <= 'z') || (str[i - 1] >= 'A' && str[i - 1] <= 'Z')))
             res += str[i].toUpperCase();
        else
            res += str[i];
    }
    return res;
}

console.log(strCapitalize("      my name is   achraf   "))