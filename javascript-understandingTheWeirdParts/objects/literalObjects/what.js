// instead of doing:    var person = new Object();      
// you can do:   var person = {};



// SO...this:   object literal
var person = { firstname: "Brian", lastname: "Stumbaugh" };
console.log(person);


// is the same as this:
var person = new Object;
person.firstname = "Brian";
person.lastname = "Stumbaugh";
console.log(person);

// that's huge.



// the object literal from above can also be written like this:
var brian = {
	firstname: "Brian",
	lastname: "Stumbaugh",
	address: {
		street: "2133 Strombury Dr",
		city: "Nashville",
		state: "TN"
	}
}
console.log(person);

var doesIt = ("address" in brian);   // this checks for a property in an object and returns true or false
console.log(doesIt);


if ("address" in brian === true) {
	alert("Brian does have an address!");
}



function greet(person){
	console.log("Hi " + person.firstname); //this accepts brian as an arg when the greet function is called below , so it's brian.firstname which is Brian
}
greet(brian);    // this calls the greet function, passing 

console.log("just fired the greet function passing the brian object");

greet({ 					// this calls the greet function again, but passes in a new object. cool.
	firstname: 'Mary',      
	lastname: 'Doe'
})












