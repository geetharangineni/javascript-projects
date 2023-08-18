// Declare and assign the variables below
let distanceToSpaceFromEarthKilometers = 5000; // Distance to space from Earth in kilometers
let milesPerKilometer = 0.621371; // Conversion factor from kilometers to miles
let shuttleSpeedMph = 2000; // Speed of the shuttle in miles per hour
let shuttleName = "SpaceX Shuttle"; // Name of the shuttle
let kilometersToMoon = 384400; // Distance to the Moon in kilometers

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log("Variables Datatype")
console.log(typeof distanceToSpaceFromEarthKilometers)
console.log(typeof kilometersToMoon)
console.log(typeof milesPerKilometer)
console.log(typeof shuttleSpeedMph )
console.log(typeof shuttleName )
// Calculate a space mission below
const milesToSpace = distanceToSpaceFromEarthKilometers * milesPerKilometer;
const hoursToSpace = milesToSpace / shuttleSpeedMph;
const daysToSpace = hoursToSpace / 24;
// Print the results of the space mission calculations below
console.log(`${shuttleName} will take approximately ${daysToSpace.toFixed(2)} days to travel from Earth to space.`);
// Calculate a trip to the moon below
let milesToMoon = kilometersToMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(`${shuttleName} will take ${daysToMoon} days to reach the Moon.`);