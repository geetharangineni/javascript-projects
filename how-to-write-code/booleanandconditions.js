// initializing variables for space ahuttel
let engineIndicatorLight= "redblinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000 ;
let fuelLevel = 6000;
let engineTemperature = 2500;
let commandOverride = true;


//condition to check engine status

if (engineIndicatorLight === "green") {
    console.log("Engines have started.");
} else if (engineIndicatorLight === "green blinking") {
    console.log("Engines are preparing to start.");
} else {
    console.log("Engines are off.");
}

//checking crew status

//if (crewStatus) {
    //console.log("Crew Ready");
 // } else {
   // console.log("Crew Not Ready");
 // }

 if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
 } else {
    console.log("all systems go");
 }



 if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("all systems go");
 } else {
    console.log("WARNING. Not ready");
 }

  // check computer ststus
  if(computerStatusCode === 200) {
   console.log( 'Please stand by. Computer is rebooting.');
  } else if(computerStatusCode ===400)
  {
    console.log('Success! Computer online.');
  }
  else{
    console.log('ALERT: Computer offline!');
  }
//check shuttele speed
  if(shuttleSpeed >  17500) {
    console.log('ALERT: Escape velocity reached!');
}
else if(shuttleSpeed<8000) {
console.log('Cannot maintain orbit!');
}
else{
    console.log('Stable speed');
}

//monitor shuttel fuel status

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 20000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel > 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }

  //
  if ((fuelLevel > 20000 && engineIndicatorLight !== 'red blinking') || commandOverride) {
    console.log("Cleared to launch!");
} else {
    console.log("Launch scrubbed!");
}
//Replace the fuelLevel and engineIndicatorLight values with actual data representing the fuel level and engine status, respectively. Also, you can change the value of commandOverride to true or false based on the desired behavior. The program will then output either "Cleared to launch!" or "Launch scrubbed!" according to the logic you've provided.











 