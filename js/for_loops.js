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





