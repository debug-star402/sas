function isRepeated(str, char){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (char == str[i])
            count++;
    }
    return count;
}

function strCompressor(str){
    let res = "";
    for (let i = 0; i < str.length; i++){
        if (isRepeated(str, str[i]) >= 1){
            if (isRepeated(res, str[i]) < 1)
                res += str[i];
        }
    }
    return res;
}

console.log(strCompressor("AAAcchhhraafff"))