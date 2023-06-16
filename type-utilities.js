var partialPerson = {
    firstName: "Hamza",
    lastName: "Karfa",
    age: 26,
};
console.log(partialPerson);
function greetPerson(person) {
    console.log("Hello, ".concat(person.firstName, " ").concat(person.lastName || '', "!"));
}
var personName = {
    firstName: "Hamza",
    lastName: "Karfa",
};
function printPersonName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var personWithoutAge = {
    firstName: "Hamza",
    lastName: "Karfa",
};
function printPersonWithoutAge(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
printPersonName(personName);
printPersonWithoutAge(personWithoutAge);
greetPerson(partialPerson);
