"use strict";

console.log("App.js is running");

//JSX - Javascript XML (Javascript syntax extension)

//Create app object

var app = {
    title: "My React App",
    content: "This is JSX file content!",
    options: [1, 2]

    //This will create nested createElement.
};var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.content && React.createElement(
        "p",
        null,
        app.content
    ),
    app.options.length > 0 ? "Here are your options" : "No options"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

//Assignment

//using variable
var userName = "Atul";
var userAge = 29;
var userLocation = "Pune";

var userDataFunction = function userDataFunction(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            location
        );
    }
};
//using object
var user = {
    name: "Atul Bhangire",
    age: 29,
    location: "Pune"
};

// var templateTwo = (
//     <div>
//         <h1>{user.name}</h1>
//         <p>Age: {user.age}</p>
//         <p>{user.location}</p>
//     </div>
// );

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Name not found"
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    userDataFunction(user.location)
);
var appRoot2 = document.getElementById("app");

// ReactDOM.render(templateTwo, appRoot2);

//Babel is a JS compiler which complie react JSX code into javascript code. Is uses createElement method to display content.
