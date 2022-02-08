var numberZero = 1;
while(numberZero < 65536){
    numberZero = numberZero * 2;
    console.log(numberZero);
}


//---- Practice Exercise Personal
var x = 1;

while (x <= 4) {
    document.write("Value of x:" + x + "<br />");
    x++;
}


document.write( '--------------------- <br>')
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


document.write( '--------------------- <br>')
//--For Loop 2
function showMultiplicationTable(acceptsNumbers){
    for (let i = 1 ; i <= 10;i++){
        document.write(acceptsNumbers + ' x '+ i + ' = '+(acceptsNumbers*i)+ '<br>');
    }
}

console.log(showMultiplicationTable(5));


document.write( '--------------------- <br>')
//--For Loop 3
//random number
for (let x =1;x<10;x++){
    var randomNumber = Math.floor(Math.random() * 200) + 20;
    if (randomNumber % 2 == 0){
        document.write( randomNumber+" is even!" + '<br>')
    }else{
        document.write( randomNumber+" is Odd!" + '<br>')
    }
}

document.write( '--------------------- <br>')
//--ForLoop 4
//Create a for loop that uses console.log to create the output shown below.
for (let y =1;y<10;y++) {
    let str = '';
    for (let x = 0; x < y; x++) {
        str = str + y;
    }
    document.write(str+ '<br>')
    ;
}

document.write( '--------------------- <br>')
//--ForLoop 5
for (let wow=100;wow>0;wow-=5){
    document.write(wow+ '<br>')

}


//--- More practice with for loops



