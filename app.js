

const readline = require('readline'); //console.info(readline);
let userQuestions = readline.createInterface(process.stdin,process.stdout);
let decided = readline.createInterface(process.stdin, process.stdout);

function getUserWant(){
    "use strict";
    const activities = [{
        monday : "playing soccer",
        tuesday : "playing volley",
        wednesday : "playing basketball",
        thursday : "playing shooter game",
        friday : "walk around with pets",
        saturday : "hanging out with my Boo or with homies",
        sunday : "sleeping over all times"
    }];

    //TODO :  User just only typing the keys with key named day that has been created on above variable object*/
    // TODO : Control user that want continue or stop

    userQuestions.question("Please select which day and with activity that do you want to showed in terminal : ");

    decided.question("Do you want continue yes/no (y/n)? : " , (choosing) =>{
        if(choosing === "y"){
            console.log("You can continue the choose")
        } else if(choosing === "n"){
            console.log("Now the program is stop!")
        }
        return choosing;
    })
}

const print = getUserWant();
console.log(print);