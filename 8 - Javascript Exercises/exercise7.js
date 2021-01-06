// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user = {
    username: "Adrian",
    password: "password123",
}

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
    {
        username: "Adrian",
        password: "password123"
    },
    {
        username: "Bobby",
        password: "wordpass"
    },
    {
        username: "Sally",
        password: "54321"
    }
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!",
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo coool!",
    },
    {
        username: "Adrian",
        timeline: "Hey :)",
    }
]

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

function isUserValid(username, password){
    for(var i=0; i < database.length; i++){
        if(database[i].username === username && database[i].password === password){
            return true;
        } 
    }
    return false;
}

function signIn(user, pass){
   if(isUserValid(username, password)){
       console.log(newsfeed);
   } else {
        alert("Sorry, wrong username and password");
   }


//    if(user === database[0].username && pass === database[0].password){
//        console.log(newsFeed);
//    }
//    else{
//        alert("Sorry, wrong username and password!");
//    }
}

signIn(userNamePrompt, passwordPrompt);