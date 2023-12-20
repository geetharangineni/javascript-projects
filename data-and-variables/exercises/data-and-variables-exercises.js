// Declare and assign the variables below
let distanceToSpaceFromEarthKilometers = 5000; // Distance to space from Earth in kilometers
let milesPerKilometer = 0.621; // Conversion factor from kilometers to miles
let shuttleSpeedMph = 17500; // Speed of the shuttle in miles per hour
let shuttleName = "Determination"; // Name of the shuttle
let distanceToMoonKm = 384400; // Distance to the Moon in kilometers
let distanceToMarsKm = 225000000; // Distance to the Mars in kilometers

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log("Variables Datatype")
console.log(typeof distanceToSpaceFromEarthKilometers)
console.log(typeof distanceToMoonKm)
console.log(typeof distanceToMarsKm)
console.log(typeof milesPerKilometer)
console.log(typeof shuttleSpeedMph)
console.log(typeof shuttleName)



// Calculate a space mission below
const milesToSpace = distanceToSpaceFromEarthKilometers * milesPerKilometer;
const hoursToSpace = milesToSpace / shuttleSpeedMph;
const daysToSpace = hoursToSpace / 24;
// Print the results of the space mission calculations below
console.log(`${shuttleName} will take approximately ${daysToSpace.toFixed(2)} days to travel from Earth to space.`);
// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKilometer;
let milesToMars = distanceToMarsKm * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
let daysToMars = hoursToMars /24;

// Print the results of the trip to the moon below
console.log(`${shuttleName} will take ${daysToMoon} days to reach the Moon.`);

// Print the results of the trip to the moon below
console.log(`${shuttleName} will take ${daysToMars} days to reach the Mars.`);