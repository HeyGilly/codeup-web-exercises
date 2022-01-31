//--- Jan 31, 22- Monday
let passengersAboard = 0;
let safetyCheck = false;
let boatCanLeave = (passengersAboard >= 12 && safetyCheck);
console.log(boatCanLeave);
console.log(passengersAboard >= 12);
console.log(safetyCheck);
//Safety Check complete
safetyCheck = true;
//Going to Recalculate to see if the boat can leave.
boatCanLeave = (passengersAboard >= 12 && safetyCheck);
console.log(boatCanLeave);
//15 passengers
passengersAboard = 15;
boatCanLeave = (passengersAboard >= 12 && safetyCheck);
console.log(boatCanLeave);