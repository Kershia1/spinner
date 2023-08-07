/** character \r to return to the same output location
 * essentially fake it till you make it
 * 
 * everything else will need to use the stdout.write() method, to overwrite the same line with the next character.
 * 
 * 
 * 
 */

process.stdout.write('hello from spinner1.js... \rheyyy\n'); 

//Game Plan
//logic to create a spinner
function spinner() {
  let spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']; // create an array of spinner elements
  let delay = 100; // matches the original timeout
  for (let i = 0; i < spinner.length; i++) {
    setTimeout(() => { //the setTimeout function will be called 9 times
      process.stdout.write(`\r${spinner[i]}   `);
    }, delay);
    delay += 200;
  }
}

//creat setInterval function, with the delay as a callback 
setInterval(() => {
  let index = 0; // indexed location of the spinner elements
  let counter = 0;  // create counter variable starts at 0

  // check if counter is less than 9
  if (counter < 9) { //need to increment 9 times, step portion of the loop
    counter++; // increment counter by 1
    index++; // increment index by 1
    console.log(index); // print index
  } else {
    clearInterval(); // stop the interval @ >9
  }
});


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