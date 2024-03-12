// Favorite Fruit: Make a array of your favorite fruits, 
// and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits : string [] = ["Apple", "Banana","Mango"];
    console.log(favorite_fruits);
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

if(favorite_fruits.includes('Apple')){
    console.log("You Really Like Apples");
}
if(favorite_fruits.includes('Banana')){
    console.log("You Really Like Bananas");
}    
if(favorite_fruits.includes('Mango')){
    console.log("You Really Like Mangoes");
}
if(favorite_fruits.includes('Orange')){
    console.log("You Really Like Oranges");
}
if(favorite_fruits.includes('Melon')){
    console.log("You Really Like Melons ");
}
