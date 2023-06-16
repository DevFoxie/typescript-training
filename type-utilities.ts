type PersonType = {
    firstName: string;
    lastName: string;
    age: number;
};

type PartialPerson = Partial<PersonType>;

type PersonName = Pick<PersonType, "firstName" | "lastName">;

type PersonWithoutAge = Omit<PersonType, "age">;

const partialPerson: PartialPerson = {
    firstName: "Hamza",
    lastName: "Karfa",
    age: 26,
};

console.log(partialPerson);

function greetPerson(person: PartialPerson) {
    console.log(`Hello, ${person.firstName} ${person.lastName || ''}!`);
}

const personName: PersonName = {
    firstName: "Hamza",
    lastName: "Karfa",
}

function printPersonName(person: PersonName) {
    console.log(`${person.firstName} ${person.lastName}`);
}

const personWithoutAge: PersonWithoutAge = {
    firstName: "Hamza",
    lastName: "Karfa",
}

function printPersonWithoutAge(person: PersonWithoutAge) {
    console.log(`${person.firstName} ${person.lastName}`);
}

printPersonName(personName);
printPersonWithoutAge(personWithoutAge);
greetPerson(partialPerson);