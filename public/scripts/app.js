console.log("App.js is running");

//JSX - Javascript XML (Javascript syntax extension)

//var template = <p>This is my first assignement</p>;
var template = React.createElement(
    'p',
    null,
    "This is JSX code from app.js!"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

//Babel is a JS compiler which complie react JSX code into javascript code. Is uses createElement method to display content.