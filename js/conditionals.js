"use strict";
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *
//  *
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */

// function analyzeColor(stringColor){
//     if (stringColor === "blue"){
//         return "blue is the color of the sky";
//     } else if (stringColor === "red"){
//         return "Strawberries are red";
//     }else if (stringColor === "silver"){
//         return "Go Spurs Go";
//     }else{
//         return " I did not think of that color " + stringColor;
//     }
// }

console.log(analyzeColor("blue"));
//
//
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//
// //-------- console.log(analyzeColor(randomColor));
//
//
// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */
//
function analyzeColor(stringColor){

    switch (stringColor){
        case "blue":
            return "blue is the color of the sky";
        case "red":
            return "Strawberries are red";
        case "silver":
            return "Go Spurs Go";
        default:
            return "I did not think of the color " + stringColor;
    }

}

console.log(analyzeColor("silver"));
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
var userInputFavColor = prompt("What is your favorite Color?");
alert(analyzeColor(userInputFavColor));
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */

 function WalmartLuckyNumber(luckyNumber){
    if (luckyNumber === 0){
         return " Sorry no discount! Your price is: $"+luckyNumber;
     } else if (luckyNumber === 1){
         return "You are lucky number "+luckyNumber+"! Congrats you get 10% off";
     }else if (luckyNumber === 2){
         return "You are lucky number "+luckyNumber+"! Congrats you get 25% off";
     }else if (luckyNumber === 3){
         return "You are lucky number "+luckyNumber+"! Congrats you get 35%off";
     }else if (luckyNumber === 4){
         return "You are lucky number "+luckyNumber+"! Congrats you get you get 50% off";
     }else{
         return "You are lucky number "+luckyNumber+"! Congrats you get everything free!!!!!";
     }

 }

 console.log(WalmartLuckyNumber(1));
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var userTotalBill = prompt("What is your total Bill?");
function calculateTotal(userTotalBill, luckyNumber){
    var discountPrice;
    if (luckyNumber === 0){
        return " Sorry no discount! Your Unlucky NUmber is: $"+luckyNumber+ "! Your price is "+userTotalBill;
    } else if (luckyNumber === 1){
        discountPrice = userTotalBill-(userTotalBill * .10);
        return "You are lucky number "+luckyNumber+"! Congrats you get 10% off! Your original price: $"+userTotalBill+". Your new price: $"+discountPrice;
    }else if (luckyNumber === 2){
        discountPrice = userTotalBill-(userTotalBill * .25);
        return "You are lucky number "+luckyNumber+"! Congrats you get 25% off! Your original price: $"+userTotalBill+". Your new price: $"+discountPrice;
    }else if (luckyNumber === 3){
        discountPrice = userTotalBill-(userTotalBill * .35);
        return "You are lucky number "+luckyNumber+"! Congrats you get 35% off! Your original price: $"+userTotalBill+". Your new price: $"+discountPrice;
    }else if (luckyNumber === 4){
        discountPrice = userTotalBill-(userTotalBill * .50);
        return "You are lucky number "+luckyNumber+"! Congrats you get 50% off! Your original price: $"+userTotalBill+". Your new price: $"+discountPrice;
    }else {
        discountPrice = userTotalBill - (userTotalBill * 1);
        return "You are lucky number " + luckyNumber + "! Congrats you get 100% off! Your original price: $" + userTotalBill + ". Your new price: $" + discountPrice;
    }
}
console.log(calculateTotal(userTotalBill,luckyNumber ));





/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

    //-- Create if odd or even
    function oddEven(numbersInput){
        return numbersInput % 2 === 0 ? "Your " +numbersInput + " is Even!" : "Your " + numbersInput + " is Odd!";
    }
    //-- Create plus 100
    function plus100(numbersInput){
        return "Your " + numbersInput + " is " + (parseInt(numbersInput) + 100) + " plus 100.";
    }
    //-- Create positive or negative
    function positiveNegative(numbersInput){
        return numbersInput >= 0 ? "Your "+numbersInput+" is a positive number!" : "Your "+numbersInput+" is a negative number!";
    }

    var anwser = confirm("Would you like to enter a number?");          //Ask user if they would like to add a number

    //--- True or false, if you want to play or not
    if (anwser) {
        var numbersInput = prompt("What is your nUmber?");      //Users Numbers
        if (isNaN(numbersInput)) {                                       //Checks to see if Not a Number
            alert('That\'s not a number!!!');
        } else {
           alert(oddEven(numbersInput));                                      //Checks to see if odd or even
            alert(plus100(numbersInput));                                   //Adds additional 100 to input
            alert(positiveNegative(numbersInput));                            //Checks to see if positive or negative
        }
    } else {
        alert("GameOVer!");                                            //If they chose cancel they will get alert
    }
