(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

        const Person = {
            firstName : 'Rick',
            lastName : 'Sanchez'
    }
         console.log(Person.firstName, "Rick") // "Rick"
         console.log(Person.lastName, "Sanchez") // "Sanchez"

    console.log('---------------');
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
        Person.sayHello = function (){
            return 'Hello from ' +this.firstName+' '+this.lastName;
        }
    console.log(Person.sayHello());


    console.log('---------------');

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    for (var xy = 0;xy < shoppers.length; xy++) {
        const originalAmount = shoppers[xy].amount
        var noDiscount = originalAmount.toFixed(2);
        var yesDiscount = (originalAmount- (originalAmount * .12)).toFixed(2);

        originalAmount < 200
            ?
            console.log("I'm sorry to inform you that you are not able to use our discount.\n" +
                " You have to spend a min of $200 and you will receive BIG savings. \n" +
                " Your price is $" + noDiscount)
            :
            console.log("Congrats! For spending over $200 today. \n" +
                " H-E-B is going to pay your back by taking off 12%. \n" +
                " Your old Price was $" + originalAmount + '.\n' +
                ' Your new price is $' + yesDiscount)

    }

    console.log('---------------');

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
        title: 'Garfield',
            author:{
                firstName: "Jim",
                lastName: 'Davis'
            }
        },
        {
            title: 'The Giving Tree',
            author:{
                firstName: "Shel",
                lastName: 'Silverstein'
            }
        },
        {
            title: '1984',
            author:{
                firstName: "George",
                lastName: 'Orwell'
            }
        },
        {
            title: 'The Road',
            author:{
                firstName: "Cormac",
                lastName: 'McCarthy'
            }
        },
        {
            title: 'Fahrenheit 451',
            author:{
                firstName: "Ray",
                lastName: 'Bradbury'
            }
        },
    ];

    console.log('Welcome to the Books Store! We have these books on shelf: ');
    books.forEach(expressYourself);
    function expressYourself(item){
       console.log(item.title + " by " + item.author.firstName+" "+item.author.lastName)
   }

    console.log('---------------');


    // console.log(books[0].title) // "The Salmon of Doubt"
    // console.log(books[0].author.firstName) // "Douglas"
    // console.log(books[0].author.lastName) // "Adams"



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    for(var xy = 0; xy < books.length;xy++){
        document.write(
            'Book #'+(xy + 1) + '<br>' +
            "Title: " + books[xy].title + '<br>' +
            "Author: " + books[xy].author.firstName +' '+ books[xy].author.lastName + '<br><br>'
        );
    }


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(bookTitle, fName, lName) {
        this.title = bookTitle;
        this.firstName = fName;
        this.lastName = lName;
        return this.title +' is by '+ this.firstName +" "+ this.lastName;
    }
    const Garfield = new createBook("Garfield", "Jim", 'Davis');



})();