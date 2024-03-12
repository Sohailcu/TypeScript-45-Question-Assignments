// // Turn your if-else chain from Exercise 5-4 into an if-else chain.
// Version : 1
let alien_color: string ="Green";
// // • If the alien is green, print a message that the player earned 5 points
    if(alien_color == "Green"){
        console.log("The Player Earned 5 Points.");
    }
//     // If the alien is yellow, print a message that the player earned 10 points.
    else if (alien_color == "Yellow"){
        console.log(`The Player Earned 10 Points`);
    }
//     //  If the alien is red, print a message that the player earned 15 points.
    else if (alien_color == "Red"){
        console.log(`The Player Earned 15 Points`);
    }
    // • Write three versions of this program, making sure each message is printed for the appropriate color alien.
    else{console.log("Please Select Right Color");
    }

    // Version : 2
    alien_color = "Yellow";
    if(alien_color == "Green"){
        console.log("The Player Earned 5 Points.");
    }
    else if (alien_color == "Yellow"){
        console.log(`The Player Earned 10 Points`);
    }
    else if (alien_color == "Red"){
        console.log(`The Player Earned 15 Points`);
    }
    else if (alien_color == "Red"){
        console.log(`The Player Earned 15 Points`);
    }
    // Verison : 3
    alien_color = "Red";
    if(alien_color == "Green"){
        console.log("The Player Earned 5 Points.");
    }
    else if (alien_color == "Yellow"){
        console.log(`The Player Earned 10 Points`);
    }
    else if (alien_color == "Red"){
        console.log(`The Player Earned 15 Points`);
    }
    else if (alien_color == "Red"){
        console.log(`The Player Earned 15 Points`);
    }
