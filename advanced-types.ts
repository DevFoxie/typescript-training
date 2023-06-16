type PersonType = {
    firstName: string;
    lastName: string;
    age: number;
}

type EmployeeType = PersonType & {
    position: string;
}

function printEmployeeInfo(employee: EmployeeType) {
    console.log("Name:", employee.firstName, employee.lastName);
    console.log("Age:", employee.age);
    console.log("Position:", employee.position);
}

const employee = {
    firstName: "Hamza",
    lastName: "Karfa",
    age: 26,
    position: "Lead Developer Full-stack"
};

printEmployeeInfo(employee);