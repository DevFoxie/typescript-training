function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("You SHALL NOT divide by zero!");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log("Result:", result);
  } catch (error) {
    console.error("An unknown error occurred.");
  }
