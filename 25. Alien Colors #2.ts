// Alien Colors #2: Choose a color for an alien as you
//  did in Exercise 25, and write an if-else chain.

let alien_colour : String = "Green";

// • If the alien’s color is green, print a statement that
//  the player just earned 5 points for shooting the alien.

if(alien_colour === "Green"){
    console.log("The player just earned 5 Points for shooting the alien.");
}
else{
    console.log("The player just earned 10 Points");
}
alien_colour = "Yellow";
if(alien_colour === "Green"){
    console.log("The player just earned 5 Points for shooting the alien.");
}
