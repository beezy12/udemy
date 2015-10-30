//evernote notes for this one

var person = new Object();

person["firstname"] = "Brian";
person["lastname"] = "Stumbaugh";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);


person.address = new Object();
person.address.street = "573 Holt Valley";
person.address.city = "Nashville";
person.address.state = "TN";

console.log(person.address.street);
console.log(person.address.city);           //these are all the same
console.log(person["address"]["state"]);    