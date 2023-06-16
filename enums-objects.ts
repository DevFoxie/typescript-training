enum DaysOfWeek {
    Lundi ="Lundi",
    Mardi = "Mardi",
    Mercredi = "Mercredi",
    Jeudi = "Jeudi",
    Vendredi = "Vendredi",
    Samedi = "Samedi",
    Dimanche = "Dimanche"
}

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    dayOfBirth: DaysOfWeek;
 }

let harry: Person = {
    firstName: "Harry",
    lastName: "Potter",
    age: 42,
    dayOfBirth: DaysOfWeek.Lundi,

}

console.log(harry);