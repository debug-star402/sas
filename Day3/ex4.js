let str = "Achraf";
let i = 0;
let j = str.length - 1;

while (i < j){
    if (str[i] != str[j]){
        console.log("String is not palindrom");
        return;
    }
    i++;
    j--;
}
console.log("String is palindrom");