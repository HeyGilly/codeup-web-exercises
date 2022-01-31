"use strict";

console.log("Hello from EXTERNAL JavaScript.")

// Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//     When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.

// Use the alert function to show a message that says 'Welcome to my Website!'.
 alert('Welcome to my Website!');

//Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
//For example, if the user enters "blue", your code should alert a message that says:
const favColor = prompt("What's your favorite color?");
alert("Wow, I didn't know your favorite color is " + favColor + ".");



//------  Button Exercise
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



//----- Exercise Dataytype page.
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




// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let google = 400;
let amazon = 380;
let facebook = 350;
let googleHours = 6;
let amazonHours = 4;
let facebookHours = 10;
const paymentThisWeek = (googleHours * google) + (amazonHours + amazon) * (facebook * facebookHours);
alert('Plan to get payed this amount: $' + paymentThisWeek.toLocaleString("en-US") +'.');