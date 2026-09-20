function isRepeated(char, str){
    let count = 0;
    for (let i = 0; str[i] != undefined; i++){
        if (char === str[i])
            count++;
    }
    if (count > 1)
        return true;
    return false;
}

function repeatCounter(char, str){
    let count = 0;
    if (isRepeated(char, str)){
        for (let i = 0; str[i] != undefined; i++){
            if (char === str[i])
                count++;
        }
    }
    return count;
}

function mostRepeated(str){
    let count = 0;
    let save;
    for (let i = 0; str[i] != undefined; i++){
        if (repeatCounter(str[i], str) > count){
            count = repeatCounter(str[i], str);
            save = str[i];
        }
    }
    if (save == undefined){
        console.log("No repetition found")
        return
    }
    console.log(save, count)
}

mostRepeated("");