let str = "I love apples";
let subStr = "apples";
let replace = "bananas";

let slicedStr = str.slice(0, str.length - subStr.length);
console.log(slicedStr + replace);