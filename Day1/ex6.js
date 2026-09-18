let asterisks = "*";
let row = 1;
let column = 1;
let line = "";
while (row <= 5){
    while (column <= 5){
        line += asterisks
        column++;
    }
    console.log(line);
    row++;
}