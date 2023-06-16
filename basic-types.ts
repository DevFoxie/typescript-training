let uneString: string;
let uneBool:boolean;
let unNombre:number;
let anyThing:any;
let unknownThing:unknown; // unknown is not assignable to anything (except any). It is a type-safe version of any.
let nullThing:null; // null is not assignable to anything (except any and unknown).
let undefinedThing:undefined; // undefined is not assignable to anything (except any and unknown).
let voidThing:void; // void is not assignable to anything (except any and unknown).
let neverThing:never; // never is not assignable to anything (except any and unknown).
let arrayString:string[];
let tupleThing:[string,number]; // Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.

uneString = "Hello World";
uneBool = true;
unNombre = 42;
anyThing = "Hello World";
unknownThing = "Hello World";
nullThing = null;
undefinedThing = undefined;
voidThing = undefined;
// neverThing = any;
arrayString = ["Hello","World"];
tupleThing = ["Hello",42];

console.log(uneString);
console.log(uneBool);
console.log(unNombre);
console.log(anyThing);
console.log(unknownThing);
console.log(nullThing);
console.log(undefinedThing);
console.log(voidThing);
// console.log(neverThing);
console.log(arrayString);
console.log(tupleThing);
