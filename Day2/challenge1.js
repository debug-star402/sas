function vowelPercentage(str){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] == 'a' || str[i] == 'o' || str[i] == 'e' || str[i] == 'u' || str[i] == 'i' 
            || str[i] == 'A' || str[i] == 'E' || str[i] == 'O' || str[i] == 'U' || str[i] == 'I')
            count++;
    }
    return (count / str.length)*100;
}
console.log(vowelPercentage("AchraF") + "%")