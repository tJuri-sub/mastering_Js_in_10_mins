let str1 = "Hello";

let str2 = "World";

let str3 = "People";

// normal way for concatenate strings
console.log(str1 + " " + str2 + " " + str3);

// possible use "template strings/literals" for concatenate strings.
console.log(`${str1} ${str2} ${str3}`);

//string function .concat() nested concat() to concatenate 3 strings
console.log(str1.concat(str2).concat(str3));
