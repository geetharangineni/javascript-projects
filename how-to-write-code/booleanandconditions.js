// initializing variables for space ahuttel
let engineIndicatorLight= "redblinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000 ;

//condition to check engine status

if (engineIndicatorLight === "green") {
    console.log("Engines have started.");
} else if (engineIndicatorLight === "green blinking") {
    console.log("Engines are preparing to start.");
} else {
    console.log("Engines are off.");
}






 