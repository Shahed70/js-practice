//In JavaScript, functions can be used as templates for creating other objects. 
//These functions are called constructor functions and have special properties that are different from regular functions.

// *************//

//When a function is created in JavaScript, the JavaScript engine adds a prototype property to the function. 
//This prototype property is an object (called a prototype object) that has a constructor property by default. 
//The constructor property points back to the function on which prototype object is a property.
// We can access the function’s prototype property using functionName.prototype.

// *************//

// from this practice we learnd three things
// 1. How to create a constructor function
//every javascript funtion is by default a constructor function because with this function we can 
//create a number of new objects a constructor function name starts with capital letter
//2.How to add method and property in constructor function's prototype
//3.How to derived parents object properties in child object by Object.create method


function Person(name, age){
    let person = Object.create(Person.prototype);        
    console.log(person.play());
    person.name = name;
    person.age = age

    return person;
    
}

function PersonNew(name, age){
    //because of
 //creating an with the new keyword I don't need to 
 //create an object statically like this : let person = Object.create(Person.prototype); 
 //and also don't need to return this object. This job is done by javascript itself and names it "this"
 //and retur also as this

    //(let person = Object.create(Person.prototype);)        
    console.log(person.play());
    person.name = name;
    person.age = age

    return person;
    
}
     Person.prototype = {
    eat(){
        console.log('He is eating');
    },
    sleep(){
        console.log('He is sleeping');
    },
    play(){
        console.log('He is playing');
    }
}

Person('ami', 25)

 const sakib = new PersonNew('Sakib', 33) //because of
 //creating an with the new keyword I don't need to 
 //create an object statically like this : let person = Object.create(Person.prototype); 
 //and also don't need to return this object. This job is done by javascript itself

 
//console.log(Person('ami', 25));
// const captain = {
//     name:'Mashrafi',
//     age:36,
//     country:'Bangladesh'
// }
//console.dir(captain);
//const tamim = Person('Tamim', 35);
//tamim.play()
// const player = Object.create(captain);
 //console.log(player);