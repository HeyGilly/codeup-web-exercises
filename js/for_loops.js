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



