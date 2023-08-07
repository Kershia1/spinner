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

  // Create the setInterval function
  const intervalId = setInterval(() => {
    process.stdout.write(`\r${spinner[index]}   `); // Display the spinner element
    index++; // Move to the next element in the spinner array

    // Check if we have displayed all the spinner elements
    if (index >= spinner.length) {
      clearInterval(intervalId); // Stop the interval
    }
  }, 200); // Set the interval to 200ms, which is the delay between displaying spinner elements
}

// Call the spinner function to start displaying the spinner
spinner();







// process.stdout.write('hello from spinner1.js... \rheyyy\n'); 

// //Game Plan
// //logic to create a spinner
// function spinner() {
//   let spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']; // create an array of spinner elements
//   let index = 0; // indexed location of the spinner elements
//   let delay = 100; // matches the original timeout
//   for (let i = 0; i < spinner.length; i++) {
//     setTimeout(() => { //the setTimeout function will be called 9 times
//       process.stdout.write(`\r${spinner[i]}   `);
//     }, delay);
//     delay += 200;
//   }
// }

// //creat setInterval function, with the delay as a callback 
// setInterval(() => {
//   let counter = 0;  // create counter variable starts at 0
//   if (counter < 9) { //need to increment 9 times, step portion of the loop
//     counter++; // increment counter by 1
//     index++; // increment index by 1
//     console.log(index); // print index
//   } else { (counter > 9) //forgot to add a condition to stop the loop
//     clearInterval(); // stop the interval @ >9
//   }
// });


//then use clearInterval to stop 


// setTimeout(() => {
//   process.stdout.write('\r|  ');
// },100);

// setTimeout(() => {
//   process.stdout.write('\r/  ');
// },300);

// setTimeout(() => {
//   process.stdout.write('\r-  ');
// },500);

// setTimeout(() => { 
//   process.stdout.write('\r\ ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r| ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/ ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-  ');
// }, 1300);

// setTimeout(() => {  
//   process.stdout.write('\r\  ');
// } , 1500);

// setTimeout(() => {
//   process.stdout.write('\r|  ');
// }, 1700);