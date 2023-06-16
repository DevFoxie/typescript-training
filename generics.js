"use strict";
function identity(arg) {
    return arg;
}
identity("myString");
identity(42);
identity(true);
class Dictionary {
    constructor() {
        this.data = [];
    }
    stock(key, value) {
        this.data.push({ key, value });
    }
    show() {
        this.data.forEach(element => {
            console.log(`${element.key}: ${element.value}`);
        });
    }
}
const dictionary = new Dictionary();
dictionary.stock("key1", 1);
dictionary.stock("key2", 2);
dictionary.stock("key3", 3);
dictionary.show();
