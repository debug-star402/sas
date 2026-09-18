let asterisks = "*";
let line = "";
let row = 1;
let column = 1;

while (row <= 5){
    while (column <= row){
        line += asterisks;
        column++;
    }
    console.log(line);
    row++;
}