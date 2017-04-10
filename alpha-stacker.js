// Create an array that contains the letters of the alphabet
var alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var letterStacker = "";
// The stackLetter function should accept the array as the sole argument
function stackLetters (array) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
     for (var i = 0; i < array.length; i++) {
     	letterStacker += array[i];
     	console.log(letterStacker);
     	if (i % 3 === 0) {
     		letterStacker += " ";
     	}
     }

}

// Then add logic to stackLetters that places a space after every third letter.
// This will require you to do some basic math in JavaScript, and use an if statement.

// Your job is to read the following English statement and write the equivalent in JavaSript code to make it work.

// If the current value of the counter variable can be evenly divided by 3 - using the JavaScript remainder operator - 
// then add a single space to the output.

// // Invoke the function and pass in the array

stackLetters(alphabet);