/** character \r to return to the same output location
 * essentially fake it till you make it
 * 
 * everything else will need to use the stdout.write() method, to overwrite the same line with the next character.
 * 
 * 
 * 
 */



// Game Plan
// Logic to create a spinner
function spinner() {
  let spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']; // create an array of spinner elements
  let index = 0; // indexed location of the spinner elements

  // Create the setInterval function// need to review .write and intervalID
  const intervalId = setInterval(() => {
    process.stdout.write(`\r${spinner[index]}   `); // Display the spinner elementcd 
    index++; // Move to the next element in the spinner array

    // Check if we have displayed all the spinner elements
    if (index >= spinner.length) {
      clearInterval(intervalId); // Stop the interval
    }
  }, 200); // Set the interval to 200ms, which is the delay between displaying spinner elements
}

// Call the spinner function to start displaying the spinner
spinner();







process.stdout.write('hello from spinner2... \rheyyy\n'); 

//creat setInterval function, with the delay as a callback 
let counter = 0;  // create counter variable starts at 0 outside loop to prefevent infinit loop 

const intervalID = setInterval(() => {
  // let index = 0;
  if (counter < 9) { //need to increment 9 times, step portion of the loop
    counter++; // increment counter by 1
  } else { 
    clearInterval(intervalID); // stop the interval @ >9
  }
}, 1000); //1 sec delay
