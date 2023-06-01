const readline = require('readline'); //console.info(readline);
// let input = readline.getPrompt();


let streamInput = readline.createInterface({
    input : process.stdin, 
    output : process.stdout
});

function readInput(){
    // "use strict";

    streamInput.question("Type any todo today : ")
    console.log("Your todo is : " +  streamInput);

}

const print = readInput();
console.log(print)