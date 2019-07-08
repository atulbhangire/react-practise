// Object Destructuring

const person = {
    name: "Atul",
    age: 29,
    location: {
        city: "Pune",
        area: "Baner"
    }
}

const {name = "anonymous", age: userAge, location} = person;

console.log(`${userAge}`);


// Array Destructuring


const book = ["Ego is enemy", 20, "Penguin"];

const [title, sell, publisher] = book;

console.log(`${title}`);

const item = ["Coffee (hot)", "100", "150", "200"];

const [coffeeType, smallPrice, mediumPrice, largePrice] = item;

console.log(`I need medium ${coffeeType} of Rs. ${mediumPrice}`);