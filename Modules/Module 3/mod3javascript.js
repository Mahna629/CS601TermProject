function runAddTest() {
  // variable used to control the running of the test
  var runCheck = true;

  alert("Welcome to my addition test!");

  var userName = prompt("What is your name?");

  alert("Welcome " + userName + "!");

  // while loop to run the test, ends when runCheck is set to false
  while (runCheck == true) {
    var num1Check = false;
    var num2Check = false;

    // while loop to get the first number, and validate that it is a number
    while (num1Check == false) {
      var userNum1 = prompt("Please give me a number.");

      var num1 = Number(userNum1);

      if (isNaN(num1)) {
        alert("Please enter a valid number.");
        continue;
      } else {
        num1Check = true;
      }
    }

    // while loop to get the second number and validate that it is a number
    while (num2Check == false) {
      var userNum2 = prompt("Please give me another number.");

      var num2 = Number(userNum2);

      if (isNaN(num2)) {
        alert("Please enter a valid number.");
        continue;
      } else {
        num2Check = true;
      }
    }
    // function to add the two numbers
    addUserNumbers(num1, num2);

    var continueTest = prompt("Do you want to add more numbers? (Y or N)");

    // sets the user's input to capital, for validation purposes
    var CTUpper = continueTest.toUpperCase();

    // if Y, runs the while loop again
    // if N, sets runCheck to false, breaking the while loop
    switch (CTUpper) {
      case "Y":
        continue;
      case "N":
        runCheck = false;
    }
  }

  alert("Thank you for using my addition program!");
}

/*
function used to add the two numbers and provide information based on the sum
num1 - the first given number
num2 - the second given number
*/
function addUserNumbers(num1, num2) {
  var sum = num1 + num2;

  alert("The sum of your two numbers is: " + sum);

  if (sum > 10) {
    alert("That is a big number!");
  } else {
    alert("That is a small number!");
  }
}
