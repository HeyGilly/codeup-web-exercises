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
            "font-size":"48px",
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


    //ON click with the paragraph
    $('#containerParagraph').click(function (e){
        $(this).css({
            "text-align":"center",
            'margin': "4em auto",
            'padding':'3em',
            "background-color":"#1e1e1e",
            'width':'45vw',
            'border-radius':'20px'
        });
        $('#paragraph').css({
            "font-size":"23px",
            'color':'white'
        })
    })
});

//ON click with the paragraph
$('#unOrderList').click(function (e){
    $('.containerUnorderlist').css({
        'display':'flex',
        'justify-content':'center'
    });
    $(this).css({
        'display':'inline-flex',
        'justify-content':'space-evenly',
        'padding': '40px 0',
        "background-color":"#1e1e1e",
        'width':'50vw',
        'border-radius':'20px'
    });
    $('.listItem').css({
        "font-size":"23px",
        'color':'white'
    })
});



