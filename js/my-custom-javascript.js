"use strict";

$(document).ready(function() {

    // INSERT JAVASCRIPT CODE SAMPLE HERE



    $('.codeup').removeClass('codeup');

    $('li').css({
        "font-size":"20px",
        "letter-spacing":"1px"
    })


    $('header').css({
        "font-size":"40px",
        "text-align":"center",
        "height":"auto",
        "background-color":"grey",
        "width":"100vw",
        "letter-spacing":"1px"
    })

    //ON click with the HEADER
    $('header').click(function (e){
        $(this).css({
            "font-size":"40px",
            "text-align":"center",
            'padding': "40px 0",
            'text-transform': "uppercase",
            "height":"fit-content",
            "background-color":"royalblue",
            "width":"100vw",
            "letter-spacing":"1px",
            'color':'white'
        });
        $(this).html(
            '<h1 class="container">Welcome to my new and Improved Page!</h1>'
        )
    })


});