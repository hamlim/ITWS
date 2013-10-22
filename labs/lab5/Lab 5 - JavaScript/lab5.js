/* Lab 5 JavaScript File 
   Place variables and functions in this file */

function validate(formObj) {
  // put your validation code here
  // it will be a series of if statements
  
  if (formObj.firstName.value == "") {
    alert("You must enter a first name");
    formObj.firstName.focus();
    return false;
  }
  if (formObj.lastName.value == "") {
    alert("You must enter a last name");
    formObj.lastName.focus();
    return false;
  }
  if (formObj.title.value == "") {
    alert("You must enter a title");
    formObj.title.focus();
    return false;
  }
  if (formObj.org.value == "") {
    alert("You must enter an organization");
    formObj.org.focus();
    return false;
  }
  if (formObj.pseudonym.value == "") {
    alert("You must enter a nickname");
    formObj.pseudonym.focus();
    return false;
  }
  if (formObj.comments.value == "Please enter your comments" || formObj.comments.value == "") {
    alert("You must enter a comment");
    formObj.comments.focus();
    return false;
  }
  alert("Form successfully submitted!")
  return true;
}
function printident() {
  alert(document.addForm.firstName.value+ " " + document.addForm.lastName.value + " is " + document.addForm.pseudonym.value);
}
function clearTxtArea() {
  if (document.addForm.comments.value == "Please enter your comments") {
    document.addForm.comments.value = "";
  }
}
function addText() {
  if (document.addForm.comments.value == "") {
    document.addForm.comments.value = "Please enter your comments";
  }
}
//code to autofocus on the first element
function formFocus() {
  document.getElementById('firstName').focus();
}
window.onload = formFocus;