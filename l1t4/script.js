var n = 1234;
console.log("First value is ", n);
var newN = n.toString().split(""); //create massive with numbers
var abc = newN.reverse().join(""); // reverse the masive
var result = parseInt(abc); // change to int type.
console.log("Reversed value is ", result);