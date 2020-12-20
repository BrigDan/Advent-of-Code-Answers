// Load file from assets
fs = require('fs');

// Load each line into an array and map it to a number 
var numbers = fs.readFileSync('Assets/Day-01/input.txt', 'utf8').split('\n').map(x=>+x);

// Define values we'll use
var num1, num2, sum, abort=false;athe   

// main loop
for (let i = 0; i < numbers.length; i++) {
    num1=numbers[i];
    for (let j = 1; j < numbers.length; j++){
        num2=numbers[j];
        if (num1 + num2 == 2020){
            console.log('bingo! : '+num1+' + '+num2+' = '+(num1+num2));
            sum=num1*num2;
            abort = true;
            break;
        }
        if(abort) break;
    }
}

console.log('The multiplicative sum is: '+sum);