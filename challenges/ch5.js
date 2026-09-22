function countVowels(str){
    let count = 0;
    for (i = 0; i < str.length; i++){
        if (str[i] == "a" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "e" || 
            str[i] == "A" || str[i] == "I" || str[i] == "O" || str[i] == "U" || str[i] == "E")
            count++;
    }
    return count;
}

console.log(countVowels("AEIOUaeiouqwe"));