let str1 = "                 Hello";
let str2 = "             World             ";

// without trimming
console.log(str1 + " " + str2);

// trim method lets you remove the whitespace infront of the string or  a word
console.log(str1.trim() + " " + str2.trim());

// other methods that uses trim() trimEnd() and trimStard()

// Remove the whitespace infront of the string
console.log(str2.trimStart());
// Remove the whitespace behind of the string
console.log(str2.trimEnd() + "Hello");

// best use of trim() method
// - Remove Whitespaces when accidentaly inputted
