class Person {
    constructor(name = "Anonymous", age = 0){
        this.name = name;
        this.age = age;
    }

    getUserDetails(){
        return `Hi this is ${this.name}. And I'm ${this.age} year old!`;
    }
}

//Sub class implementation

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    };

    hasMajor(){
        let description = super.getUserDetails();
        description += ` ${this.major}`;
        return description;
    }
}

const me = new Student("Atul Bhangire", 29, "Test");

console.log(me);
console.log(me.hasMajor());

const other = new Student();

console.log(other);
console.log(other.hasMajor());


class Traveller extends Person{
    constructor(name, age, location = 'Parbhani'){
        super(name, age);
        this.location = location;
    }

    getUserDetails(){
        let userDetails = super.getUserDetails();

        if(this.location){
            userDetails += ` I'm visiting from ${this.location}`;
            return userDetails;
        }
    }
}


const traveller = new Traveller("Atul", 29, "Pune");
console.log(traveller.getUserDetails());

const otherTreveller = new Traveller("Atul", 29);
console.log(otherTreveller.getUserDetails());
