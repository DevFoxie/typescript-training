function printEmployeeInfo(employee) {
    console.log("Name:", employee.firstName, employee.lastName);
    console.log("Age:", employee.age);
    console.log("Position:", employee.position);
}
var employee = {
    firstName: "Hamza",
    lastName: "Karfa",
    age: 26,
    position: "Lead Developer Full-stack"
};
printEmployeeInfo(employee);
