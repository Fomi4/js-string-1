// Write a program that asks user to enter 2 strings. The first string is a simple text, the second string is
// an html tag that you need to wrap this text in.
// For example, user enters - 'Hello World!', 'b' -> your output in console: '<b>Hello World!</b>'

let text = prompt("Enter sentence:");
let tag = prompt("Enter HTML tag:");

console.log("<" + tag + ">" + text + "</" + tag + ">");