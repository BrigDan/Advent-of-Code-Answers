// Load file from assets
fs = require('fs');

// Load file
var text = fs.readFileSync('Assets/Day-02/input.txt', 'utf8');

// Match all numbers by Regular Expression
var nums = text.match(/1?[0-9]|[1-9][0-9]/g);

// Declare array to store range
const numRange = [];

//convert 1d to 2d array and convert to number using map
while(nums.length) numRange.push(nums.splice(0,2).map(x=>+x));

console.log(numRange);


/* TODO:  
        - Convert letter to be required into array
        - Convert string into an array
        - Iterate through each line of text, matching the letter the amount of times between the range
*/
