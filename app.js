var myName = "Joseph"; //variable for my name

const usStates = "50"; //constant for the number of united states

let x = 4 + 5; //variable of 4+5

function sayHello(){
    console.log("Hello World!"); //alert that says Hello World!
}

sayHello();

let person = {
    name: 'Charles',
    age: 21,


};



function checkAge(name, age){

    if (age > 21){
        return("Sorry " + name + ", you are old enough");
    } else if (age === 21){
        return("Hello " + name + ", you are good, bruh");
    } else {
        return("youngun " + name + ", you are too young to view this page!");
    }


}

console.log( checkAge(person.name, person.age));
console.log( checkAge("Abby", 27));
console.log( checkAge("James", 18));
console.log( checkAge("John",17));


const favVeg = ["brussel sprouts", "carrots", "tomatoes"];

for (let i = 0; i < favVeg.length; i++){
    console.log(favVeg[i])
    
}
console.log("\n")
    console.log(favVeg[1])

    let pet = {
        petName: "Shadow",
        breed: "black cat",
    };

    console.log(pet.petName, pet.breed);



const family = [
     {
        firstName: "Eric",
        age: 30,
    },{
        firstName: "Peter",
        age: 29.5,
    },{
        firstName: "Pawl",
        age: 92,
    },{
        firstName: "Connor",
        age: 12,
    },{
        firstName: "Boyd",
        age: 8,
    }
];

for (let i = 0; i < family.length; i++){
    console.log(checkAge(family[i].firstName, family[i].age))
    
}


const getLength = (word) => {
  let size =  word.length
  if ( size % 2 === 0 ){
      return 'The world is nice and even!'
  } else {
      return 'The world is an odd place!'
  }



} 
console.log(getLength("Hello World"))