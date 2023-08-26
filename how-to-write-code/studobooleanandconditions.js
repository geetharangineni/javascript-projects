// declaring variables for shuttel launch 
let date =	'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount =	7;
let astronautStatus	= 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg =	74842.31;
let totalMassKg =	crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius	= -225;
let minimumFuelTemp	= -300;
let maximumFuelTemp	= -150;
let fuelLevel	= '100%';
let weatherStatus =	'clear';
let preparedForLiftOff = true;

if (
    astronautCount <= 7 &&
    astronautStatus === 'ready' &&
    totalMassKg < maximumMassLimit &&
    (fuelTempCelsius >= -300 || fuelTempCelsius <= -150) &&
    fuelLevel === '100%' &&
    weatherStatus === 'clear' &&
    preparedForLiftOff
) {
     // Shuttle is Cleared for LiftOff
     console.log("All Systems are a go! Initiating space shuttle launch sequence.");
     console.log("Date:", date);
     console.log("Time:", time);
     console.log("Astronaut Count:", astronautCount);
     console.log("Crew Mass (kg):", crewMassKg);
     console.log("Fuel Mass (kg):", fuelMassKg);
     console.log("Shuttle Mass (kg):", shuttleMassKg);
     console.log("Total Mass (kg):", totalMassKg);
     console.log("Fuel Temperature (°C):", fuelTempCelsius);
     console.log("Weather Status:", weatherStatus);
     console.log("Have a safe trip astronauts!");
}
else {
    // Launch operations are shut down
    console.log("Launch operations are shut down.");
}





