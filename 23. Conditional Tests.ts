let car : string = 'SUBARO';

// TEST 1 : Equality Coomparision (TRUE) (==);
console.log("Is Car == `SUBARO`? I Predict is True");
console.log(car == `SUBARO`);

// TEST 2 : Strict Equality Coomparision (TRUE) (===);
console.log("Is Car === `SUBARO`? I Predict is True");
console.log(car === `SUBARO`);

// TEST 3 : Inequality Coomparision (False) (!=);
console.log("Is Car != `SUBARO`? I Predict is False");
console.log(car !== `SUBARO`);

// TEST 4 : Strict Inequality Coomparision (False) (!==);
console.log("Is Car !== `SUBARO`? I Predict is False");
console.log(car !== `SUBARO`);

// TEST 5 : Less Then comparision (False) (<);
console.log("Is Car < `SUBARO`? I Predict is False");
console.log(car < `SUBARO`);

// TEST 6 : Greatern Then comparision (False) (>);
console.log("Is Car > `SUBARO`? I Predict is False");
console.log(car > `SUBARO`);

// TEST 7 : Less Then or Equal comparision (True) (<=);
console.log("Is Car <= `SUBARO`? I Predict is True");
console.log(car <= `SUBARO`);

// TEST 8 : Greater Then or Equal comparision (True) (>=);
console.log("Is Car >= `SUBARO`? I Predict is True");
console.log(car >= `SUBARO`);

// TEST 9 : Checking Truthniess (True) (?); 
console.log("Is Car? I Predict is True");
console.log(car); // True (non Empty String is Truthy)

// TEST 10 : Checking Falsniess (False) (!?); 
console.log("Is !Car? I Predict is False");
console.log(!car); //False (negation of a Truthy Value)