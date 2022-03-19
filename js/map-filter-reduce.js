const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];



//--- #Exercise 3: Use .filter to create an array of user objects where each user object has at least 3 languages in the
// languages array.
let wow = Object.keys(users).filter((k) => users[k].languages.length < 3 ? users[k].languages.push('python'): users[k].languages);
// console.log(users);


//--- #Exercise 4: Use .reduce to get the total years of experience from the list of users.
//                  Once you get the total of years you can use the result to calculate the average.
let average = users.reduce((sum,value) => {
    return sum + value.yearsOfExperience / users.length;
}, 0) ;
console.log(average);
