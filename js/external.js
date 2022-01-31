"use strict";

console.log("Hello from EXTERNAL JavaScript.")

// // Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
// //     When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// //     Use an alert to show the results of each problem.
//
// // Use the alert function to show a message that says 'Welcome to my Website!'.
 alert('Welcome to my Website!');
//
// //Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
// //For example, if the user enters "blue", your code should alert a message that says:
const favColor = prompt("What's your favorite color?");
alert("Wow, I didn't know your favorite color is " + favColor + ".");
//
//
//
// //------  Button Exercise
const toggleButton = document.getElementById('toggle');
const hideParagraph = document.getElementById('hideable');

toggleButton.onclick = function() {
    let theClass = hideParagraph.getAttribute("class");
    if( theClass == "hidden"){
        hideParagraph.removeAttribute("class");
        alert('YEEEHHAAA ITS BACK!');
    } else {
        hideParagraph.setAttribute('class', "hidden");
        alert('OH NO! You took out the paragraph!');
    }
}
//
//
//
// //----- Exercise Dataytype page.
alert('Exercise #2');
// the password must not include the username
// neither the username or password can start or end with whitespace
var username = 'codeup';
var password = 'notastrongpassword';

let containerHoldingBooleanValue = (password.length >= 5 && username.length < 20);
let passwordUsername = (-1 == password.search(username));     // One way to do it
passwordUsername = !password.includes(username);              // Another way to do it
let usernameNew = !username.endsWith(" ") && !password.endsWith(' ') && !username.startsWith(" ") && !password.startsWith(" ")
!password.endsWith(' ') ;

if (containerHoldingBooleanValue && passwordUsername && usernameNew){
    alert('your password and username works!');
}




// Exercise #3
// You have rented some movies for your kids:
// The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

alert('EXERCISE #3: Welcome to Gilly\'s Movie Rental');
var littleMermaid = prompt("How many days would you like to rent The Little Mermaid? ")
var brotherBear = prompt("How many days would you like to rent Brother Bear? ")
var hercules = prompt("How many days would you like to rent Hercules?")
alert("thank you let me get your total...");

var pricePerMoviePerDay = 3;

var totalPrice = (littleMermaid * pricePerMoviePerDay) + (brotherBear * pricePerMoviePerDay) + (hercules * pricePerMoviePerDay);

alert("you total price for the movies is: " + "$"+ totalPrice.toFixed(2) + " Will that be cash or card?");



// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
alert('EXERCISE #4: Welcome to Gilly\'s weekly pay!');
let google = 400;
let amazon = 380;
let facebook = 350;
let googleHours = Number(prompt("How Many hours you work at Google?"));
let amazonHours = Number(prompt("How Many hours you work at Amazon?"));;
let facebookHours = Number(prompt("How Many hours you work at Facebook?"));;
const paymentThisWeek = (googleHours * google) + (amazonHours + amazon) + (facebook * facebookHours);
alert('Plan to get payed this amount: $' + paymentThisWeek.toLocaleString("en-US")+'.');


console.log(googleHours * google);