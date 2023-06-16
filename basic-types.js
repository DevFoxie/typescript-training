"use strict";
let uneString;
let uneBool;
let unNombre;
let anyThing;
let unknownThing; // unknown is not assignable to anything (except any). It is a type-safe version of any.
let nullThing; // null is not assignable to anything (except any and unknown).
let undefinedThing; // undefined is not assignable to anything (except any and unknown).
let voidThing; // void is not assignable to anything (except any and unknown).
let neverThing; // never is not assignable to anything (except any and unknown).
let arrayString;
let tupleThing; // Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.
uneString = "Hello World";
uneBool = true;
unNombre = 42;
anyThing = "Hello World";
unknownThing = "Hello World";
nullThing = null;
undefinedThing = undefined;
voidThing = undefined;
// neverThing = any;
arrayString = ["Hello", "World"];
tupleThing = ["Hello", 42];
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
