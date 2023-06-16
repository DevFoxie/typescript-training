"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logClass(target, any) {
    console.log(any);
    console.log(`Class: ${target.name}`);
}
function logMethod(target, descriptor) {
    descriptor.value = function (...args) {
        console.log(`Class: ${target.constructor.name}`);
        console.log(`Method: ${target} - Arguments: ${JSON.stringify(args)}`);
    };
    console.log('descriptor', descriptor.value());
}
let ExampleClass = class ExampleClass {
    constructor(message) {
        this.message = message;
    }
    showMessage(times) {
        for (let i = 0; i < times; i++) {
            console.log(this.message);
        }
    }
};
__decorate([
    logMethod
], ExampleClass.prototype, "showMessage", null);
ExampleClass = __decorate([
    logClass
], ExampleClass);
const example = new ExampleClass("Hello, world!");
example.showMessage(3);
