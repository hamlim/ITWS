/* In-class JavaScript File 
   Place variables and functions in this file */

// variables declared outside of functions are global (scope)
var example = "An example."
var firstName = "Hector";
var age = 30;
var insuranceCutOffAge = 26;

function writeIt() {
  var element = document.getElementById("output");
  element.innerHTML = "Some new text.";
}
function example() {
  alert(example);  
}

function example2() {
  // variables declared inside a function are local to that function (scope)
  var example = "A different example.";
  alert(example);
}
function cube(x) {
  return x*x*x;
}