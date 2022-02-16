var startAtTwo = 2;
while(startAtTwo <= 65536){
    console.log(startAtTwo)
    startAtTwo *= 2;

}

// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5

do {
    document.write('The amount of cones to sell '+ allCones+'');
    let amountConesBoughtByClients = Math.floor(Math.random() * 5) + 1;
    if (amountConesBoughtByClients>allCones){
        document.write('<br> I\'m Sorry, but I do not have that amount!<br> You are trying to buy ' +amountConesBoughtByClients+ " and I  only have "+allCones+'.<br><br>');
    } else{
        document.write('<br> The Customer wants to buy '+ amountConesBoughtByClients + '<br>');
        document.write('Thank you! <br><br>');
        allCones = allCones - amountConesBoughtByClients;
    }
} while(allCones > 0);
document.write('<br> Time to go home <br>');


