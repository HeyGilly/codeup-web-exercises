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





//------- Jan 31, 22- Monday
// write a function that takes in an input and returns the string "I have no idea what you just said";
function whatHappen(takesInput){
    return "I have no idea what you just said";
};
console.log(whatHappen('this is new input'));

//anonymous Function - Expression
let whatYouSay = function(input){
    alert("no you didnt");
};
whatYouSay("wow");

//anonymous Function - Declaration
(function(){
    alert("I have no idea what is going on");
})();


