/** character \r to return to the same output location
 * essentially fake it till you make it
 * 
 * everything else will need to use the stdout.write() method, to overwrite the same line with the next character.
 * 
 * 
 * 
 */

process.stdout.write('hello from spinner1.js... \rheyyy\n'); 

setTimeout(() => {
  process.stdout.write('\r|  ');
},100);

setTimeout(() => {
  process.stdout.write('\r/  ');
},300);

setTimeout(() => {
  process.stdout.write('\r-  ');
},500);

setTimeout(() => { 
  process.stdout.write('\r\ ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r| ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/ ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-  ');
}, 1300);

setTimeout(() => {  
  process.stdout.write('\r\  ');
} , 1500);

setTimeout(() => {
  process.stdout.write('\r|  ');
}, 1700);
