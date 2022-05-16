var myName = "Joseph"; //variable for my name
var usStates = "50"; //constant for the number of united states
var x = 4 + 5; //variable of 4+5
function sayHello() {
    console.log("Hello World!"); //alert that says Hello World!
}
sayHello();
var person = {
    name: 'Charles',
    age: 21
};
function checkAge(name, age) {
    if (age > 21) {
        return ("Sorry " + name + ", you are old enough");
    }
    else if (age === 21) {
        return ("Hello " + name + ", you are good, bruh");
    }
    else {
        return ("youngun " + name + ", you are too young to view this page!");
    }
}
console.log(checkAge(person.name, person.age));
console.log(checkAge("Abby", 27));
console.log(checkAge("James", 18));
console.log(checkAge("John", 17));
var favVeg = ["brussel sprouts", "carrots", "tomatoes"];
for (var i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i]);
}
console.log("\n");
console.log(favVeg[1]);
var pet = {
    petName: "Shadow",
    breed: "black cat"
};
console.log(pet.petName, pet.breed);
var family = [
    {
        firstName: "Eric",
        age: 30
    }, {
        firstName: "Peter",
        age: 29.5
    }, {
        firstName: "Pawl",
        age: 92
    }, {
        firstName: "Connor",
        age: 12
    }, {
        firstName: "Boyd",
        age: 8
    }
];
for (var i = 0; i < family.length; i++) {
    console.log(checkAge(family[i].firstName, family[i].age));
}
var getLength = function (word) {
    var size = word.length;
    if (size % 2 === 0) {
        return 'The world is nice and even!';
    }
    else {
        return 'The world is an odd place!';
    }
};
console.log(getLength("Hello World"));
