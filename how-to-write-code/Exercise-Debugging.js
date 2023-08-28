//let name = 'Julie';
//console.log("Hello, name");

//let day = Wednesday;
//console.log(day;        //Syntax error

//let firstName = "Jack";
//console.log(firstname);      //Reference error

//let weeklyPay = 600;

//let dailyEarnings = weeklyPay / 7;
//console.log(dailyEarnings);

//const input = require('readline-sync');

//let degreesC = input.question('Temp in degrees C:');
//let degreesK = degreesC + 273.15;

//console.log('Degrees K:', degreesK);

//const input = require('readline-sync');

//let degreesC = input.question('Temp in degrees C: ');
//console.log(typeof degreesC);
//let degreesK = degreesC + 273.15;
//console.log('Degrees K:', degreesK);

//const input = require('readline-sync');

//let degreesC = input.question('Temp in degrees C: ');
//degreesC = Number(degreesC);
//let degreesK = degreesC + 273.15;

//console.log('Degrees K:', degreesK);


//let launchReady = false;
//let fuelLevel = 17000;

//if (fuelLevel >= 20000 {     //Syntax error in this line
   //console.log('Fuel level cleared.');
   //launchReady = true;
//} else {
   //console.log('WARNING: Insufficient fuel!');
   //launchReady = false;
//}


//let launchReady = false;
//let fuelLevel = 17000;

//if (fuellevel >= 20000) {      /* here fuellevel change to fuelLevel (Run time error)
   //console.log('Fuel level cleared.');
   //launchReady = true;
//} else {
  // console.log('WARNING: Insufficient fuel!');
   //launchReady = false;
//}

let crewReay = false;
let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
    console.log('Fuel level cleared.');
    launchReady = true;
 } else {
    console.log('WARNING: Insufficient fuel!');
    launchReady = false;
 }
 console.log("launchReady = ", launchReady);
 
 if (crewStatus && computerStatus === 'green'){
    console.log('Crew & computer cleared.');
    crewReady = true;
 } else {
    console.log('WARNING: Crew or computer not ready!');
    crewReady = false;
 }
 console.log("crewReady = ", crewReady);


if (launchReady) {
  console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}


