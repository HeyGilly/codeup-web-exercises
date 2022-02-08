//------- Jan 31, 22- Monday
// let passengersAboard = 0;
// let safetyCheck = false;
// let boatCanLeave = (passengersAboard >= 12 && safetyCheck);
// console.log(boatCanLeave);
// console.log(passengersAboard >= 12);
// console.log(safetyCheck);
// //Safety Check complete
// safetyCheck = true;
// //Going to Recalculate to see if the boat can leave.
// boatCanLeave = (passengersAboard >= 12 && safetyCheck);
// console.log(boatCanLeave);
// //15 passengers
// passengersAboard = 15;
// boatCanLeave = (passengersAboard >= 12 && safetyCheck);
// console.log(boatCanLeave);





//------- Feb 08 - Monday
// write a function that takes in an input and returns the string "I have no idea what you just said";
// function whatHappen(takesInput){
//     return "I have no idea what you just said";
// };
// console.log(whatHappen('this is new input'));
//
// //anonymous Function - Expression
// let whatYouSay = function(input){
//     alert("no you didnt");
// };
// whatYouSay("wow");
//
// //anonymous Function - Declaration
// (function(){
//     alert("I have no idea what is going on");
// })();
//
//

//------- Feb 09, 22- Tuesday
//write a function that in a number and returns that number plus itself.
function moringExercise(numInput) {
    return Number(numInput) + Number(numInput);
};
console.log(moringExercise(2));

//Write a function that takes in two numbers, doubles each number, and then returns the sum of both numbers doubled.
function twoNumbers(num1, num2){
    return (num1*2)+(num2*2);
}

console.log(twoNumbers(1, 2));

//write a function that takes in a number and squares itself.
function square(squareThisNum){
    return squareThisNum ** 2;
}

console.log(square(5));

//write a function that takes in a string and returns its length
function lengthString(x){
    return x.length;
}

console.log(lengthString("hello dsfasdf"));

//write a fucntion that takes in two strings and return the sum of their lengths.
function sumLength(str1, str2){
    return str1.length + str2.length;
}

console.log(sumLength('why', 'who I cant belaive it '));

// write a function that take in a number and return the sstring even or off depending on where thae number is even
// or odd.

function evenOdd(numInput){
    return (numInput % 2 == 0) ? 'even':'odd';
}

console.log(evenOdd(7));