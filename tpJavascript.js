function galleryFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");

  var imgText = document.getElementById("imgtext");

  expandImg.src = imgs.src;

  imgText.innerHTML = imgs.alt;

  expandImg.parentElement.style.display = "block";
}

/*
function that sends true or false to the page, controlling whether or not the
information should be submitted
*/
function formValidation() {
  if (validate()) {
    return true;
  } else {
    return false;
  }
}
/*
the main validation function
return: true or false
*/
function validate() {
  var firstName = document.getElementById("fname");
  var lastName = document.getElementById("lname");
  var validPage = true;
  // check for different types of validation on the first form
  if (!emptyCheck(firstName)) {
    validPage = false;
  } else if (!lengthCheck(firstName)) {
    validPage = false;
  } else if (!regexCheck(firstName)) {
    validPage = false;
  } else {
    removeDOMError(firstName);
  }
  // check for different types of validation on the second form
  if (!emptyCheck(lastName)) {
    validPage = false;
  } else if (!lengthCheck(lastName)) {
    validPage = false;
  } else if (!regexCheck(lastName)) {
    validPage = false;
  } else {
    removeDOMError(lastName);
  }
  // returns true or false
  return validPage;

}
/*
checks if a required form is empty
param: node, the form being checked
return: true or false
*/
function emptyCheck(node) {
  if (!node.value){
    var message = "This form is required!"
    DOMError(node, message);
    return false;
  } else {
    return true;
  }
}
/*
checks if the form data is the required length
param: node, the form being checked
return: true or false
*/
function lengthCheck(node) {
  if (node.value.length > 0 && node.value.length < 2) {
    var message = "Name needs to be longer than 1 character!";
    DOMError(node, message);
    return false;
  } else {
    return true;
  }
}
/*
checks if the form data is only letters
param: node, the form being checked
return: true or false
*/
function regexCheck(node) {
  if (!node.value.match("^[A-Za-z]*$")) {
    var message = "Name can only contain letters (A-Z)!";
    DOMError(node, message);
    return false;
  } else {
    return true;
  }
}

/*
handles printing of errors on the webpage
param: node, the form with an error
param: message, the error message
adapted from: https://www.quirksmode.org/dom/error.html
*/
function DOMError(node, message) {
  // removes the error message if there is on already
  if (node.hasError) {
    removeDOMError(node);
  }
  // creates a new span element next to the form for the error message
  var sp = document.createElement("span");
  sp.className = "error";
  sp.appendChild(document.createTextNode(message));
  node.parentNode.appendChild(sp);
  node.hasError = sp;
}
/*
remvoves the error message when it is no longer valid
param: node, the from that needs its error removed
adapted from: https://www.quirksmode.org/dom/error.html
*/
function removeDOMError(node) {
  node.parentNode.removeChild(node.hasError);
}
