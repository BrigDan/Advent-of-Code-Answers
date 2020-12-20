// Load file from assets
fs = require('fs');

// Load each line into an array and map it to a number 
var text = fs.readFileSync('Assets/Day-02/input.txt', 'utf8');
var nums = text.match(/1?[0-9]|[1-9][0-9]/g);
const numRange = [];
//convert 1d to 2d array and convert to number using map
while(nums.length) numRange.push(nums.splice(0,2).map(x=>+x));
console.log(numRange);
