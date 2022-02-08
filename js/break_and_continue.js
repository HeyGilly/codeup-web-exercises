var promptInput = prompt('Please insert an ODD number between 1 - 50;');
document.write('Number to skip is: #'+promptInput+'<br>')
for(var i= 1;i<50;i+=2){
    if (promptInput == i){
        document.write("Yikes! it is your Number " + i+ '<br>');
        continue;
        // break;
    } else{
        document.write(i +'<br>')
    }
}

