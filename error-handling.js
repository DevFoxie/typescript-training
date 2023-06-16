function divide(a, b) {
    if (b === 0) {
        throw new Error("You SHALL NOT divide by zero!");
    }
    return a / b;
}
try {
    var result = divide(10, 0);
    console.log("Result:", result);
}
catch (error) {
    console.error("An unknown error occurred.");
}
