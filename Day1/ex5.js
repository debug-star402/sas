let str = "AEIOU";
let len;
let i = 0;
let count = 0;

while (str[i] !== undefined)
    i++;
len = i;
for (i = 0; i < len; i++){
    if (str[i] == "a" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "e" ||
         str[i] == "A" || str[i] == "I" || str[i] == "O" || str[i] == "U" || str[i] == "E")
        count++;
}
console.log(count)
