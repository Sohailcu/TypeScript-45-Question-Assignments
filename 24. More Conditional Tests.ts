import { notDeepEqual } from "assert";

let car : String ="TOYOTA"
let Model : number = 2007
let numbers : number [] = [1, 2, 3, 4, 5];

//STRING TEST:

// TEST 1 : Equality (TRUE) (==);
console.log("Is Car == `TOYOTA`? I Predict is True");
console.log(car == `TOYOTA`);

// TEST 2 : Equality (False) (===);
console.log("Is Car === `TOYOTA`? I Predict is False");
console.log(car === `TOYOTA`);

// TEST 3 : Inequality (True) (!=);
console.log("Is Car != `Suzuki`? I Predict is True");
console.log(car != `Suzuki`);

// TEST 4 : Inequality (False) (!==);
console.log("Is Car !== `TOYOTA`? I Predict is False");
console.log(car !== `TOYOTA`);

// LowerCase Function Test:

// TEST 5 : Lowercase Conversation (True);
console.log("Is Car.tolowercase() == `TOYOTA`? I Predict is True");
console.log(car.toLowerCase() == `TOYOTA`); //Converted to Lowercase

// TEST 6 : Lowercase Conversation (False);
console.log("Is Car === car.tolowercase()? I Predict is False");
console.log(car === car.toLowerCase()); // Orignal Value Remain uppercase

// Numerical Test :

// TEST 7 : Equality (True)
console.log("Is Model == 2007? I Predict is True");
console.log(Model == 2007);

// TEST 8 : Inqeuality (False)
console.log("Is Model != 2009? I Predict is True");
console.log(Model != 2009);

// TEST 9 : Greater then (False)
console.log("Is Model > 2009? I Predict is False");
console.log(Model > 2009);

// TEST 10 : Less then or Equal (True)
console.log("Is Model <= 2007? I Predict is True");
console.log(Model <= 2007);

// Logical OPerators :

// TEST 11 : AND (True)
console.log("Is Model > 2001 && model < 2009? I Predict is True");
console.log(Model > 2001 && Model < 2009); //Both Condition Met

// TEST 12 : OR (False)
console.log("Is Model > 2009 || model < 2005? I Predict is False");
console.log(Model > 2009 || Model < 2002); //neither Condition Met

// Array Tests :

// TEST 13 : In Array (True)
console.log("Is 2 in numbers? I Predict is True");
console.log(2 in numbers); // Check for index existance 

// TEST 14 : Not In Array (False)
console.log("Is 6 not in numbers? I Predict is True");
console.log(6 not in numbers); //negation of "in" operator