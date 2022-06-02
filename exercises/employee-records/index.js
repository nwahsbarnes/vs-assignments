let employees = [];

function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
}

Employee.prototype.printEmployee = function () {
    console.log("Name: " + this.name + ", Title: " + this.jobTitle + ", Salary: $" + this.salary + ", Status: " + this.status);
}

let employee1 = new Employee("Shawn", "Student", 0);
let employee2 = new Employee("Brandon", "Teacher", 100000);
let employee3 = new Employee("Jake", "Lawyer", 200000);

employees.push(employee1, employee2, employee3);

for (let employee of employees) {
    employee.printEmployee();
}