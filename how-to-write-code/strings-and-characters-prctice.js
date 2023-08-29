//Bracket Notations.

let jsCreator = "Geetha Rangineni";
let firstInitial = jsCreator[0];
let lastInitial = jsCreator[7];

let outputStr = "JavaScript was created by somebody with initials " + 
   firstInitial + "." +
   lastInitial + ".";

console.log(outputStr);

let phrase = "JavaScripts rocks!";
console.log(phrase[phrase.length-8]);

// strings as an object
console.log(typeof console);

let firstName = "Geetha";
let lastName = "Rangineni"
console.log(firstName, "has", firstName.length, "Characters");
console.log(lastName, "has", lastName.length, "charaters");


let nonprofit = "Launchcode";
console.log(nonprofit.toLowerCase());
console.log(nonprofit);

cityName = "Vienna";
stateName = "Virginia";
location = cityName + ", " +  stateName;

console.log(location.length);
//string Immutability
let noprofit = "Orangemango";
nonprofit ="OrangeMango";
console.log(nonprofit);
let pet ="cat";
console.log(pet +'s');

// String Methods
let Org = "PaneeraBread";

console.log(Org.toLowerCase());
console.log(Org);
console.log(Org.trim());

//
let language = 'Java Script';
language.replace('J', 'Q');
language.slice(1,4);
console.log(language);


//trim
let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

// Character encoding

let nonprofit1 = "LaunchCode";

console.log(nonprofit1.charCodeAt(0));
console.log(nonprofit1.charCodeAt(1));
console.log(nonprofit1.charCodeAt(2));
console.log(nonprofit1.charCodeAt(3));
console.log(nonprofit1.charCodeAt(4));
console.log(nonprofit1.charCodeAt(5));
console.log(nonprofit1.charCodeAt(6));
console.log(nonprofit1.charCodeAt(7));
console.log(nonprofit1.charCodeAt(8));
console.log(nonprofit1.charCodeAt(9));


// convert an ASCII code to an actual character
let codes = [76, 97, 117, 110, 99, 104, 67, 111, 100, 101];

let characters = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1])
                + String.fromCharCode(codes[2]) + String.fromCharCode(codes[3])
                + String.fromCharCode(codes[4]) + String.fromCharCode(codes[5])
                + String.fromCharCode(codes[6]) + String.fromCharCode(codes[7])
                + String.fromCharCode(codes[8]) + String.fromCharCode(codes[9]);

console.log(characters);

//Special character

console.log("A message\nbroken across lines,\n\tand indented");
console.log("The interrobang character, \u203d, combines ? and !");

//Escaping character
console.log("\"The dog's favorite toy is a stuffed hedgehog,\" said Chris");
//seperate line
console.log("launch\ncode");

//Template Literals
//let name ="Sam Raina"
//let currentAge = 14;
//console.log("next year " + name + " will be " +(currentAge+1)+ " . " );

//let name = "Jack";
//let currentAge = 9;

//console.log(`Next year, ${name} will be ${currentAge + 1}.`);

// poem
let poem = `The mind chases happiness.
The heart creates happiness.
The soul is happiness
And it spreads happiness
All-where.

– Sri Chinmoy`;

console.log(poem);

// Example
let pluralNoun = 'documents';
let name = 'Launchcode';
let verb = 'veryusefull';
let adjective = 'forstudents';
let color = 'gren';

console.log("JavaScript provides a "+ color +" collection of tools — including " + adjective + " syntax and " + pluralNoun + " — that allows "+ name +" to "+ verb +" with strings.")


//excerise
let num ="Launchcode";
 if (String(num).includes('.')){
   console.log(String(num).length-1);
}  
else{
   console.log(String(num).length);
}


//let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
//let newString = dna.trim();
//console.log(newString);

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
dna = dna.replace('GCT','AGG');
console.log(dna);
console.log(dna.slice(16,19));
console.log(`${dna.slice(4,7).toLowerCase()}o ${dna.slice(dna.indexOf('CAT'),dna.indexOf('CAT')+3).toLowerCase()}`);


