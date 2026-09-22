function isDuplicate(str, char){
    for (let i = 0; i < str.length; i++){
        if (str[i] == char)
            return true;
    }
    return false;
}

function isAnagram(str1, str2){
    let count = 0;
    if (str1.length == str2.length){
        for (let i = 0; i < str2.length; i++){
            if (isDuplicate(str1, str2[i]))
                count++;
        }
        if (count == str1.length)
            console.log("The two strings are anagrams");
        else
            console.log("The two strings are NOT anagrams");
    }
    else
        console.log("The two strings are NOT anagrams");
}

isAnagram("achraf", "rahcaf");