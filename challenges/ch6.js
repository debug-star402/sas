function isPalindrom(str){
    let j = str.length - 1;
    let i = 0;
    let isPal = true;
    while (i < j){
        if (str[i] != str[j]){
            isPal = false;
            break;
        }
        i++;
        j--;
    }
    if (isPal)
        console.log("Palindrome")
    else
        console.log("Not Palindrome");
}

isPalindrom("levelee")