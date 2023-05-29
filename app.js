

const readline = require('readline'); //console.info(readline);
// let input = readline.getPrompt();
let input = readline.createInterface(process.stdin, process.stdout);

function getUserWant(){
    "use strict";

    input = readline.question("Type any todo today : ");
    return `so, you are doing an activities : ${input};`;

}

const print = getUserWant();
console.log(print);