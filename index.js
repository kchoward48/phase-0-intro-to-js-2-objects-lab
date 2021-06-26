// Write your solution in this file!
const employee = {
    name: 'Mark Zuckerberg',
    streetAddress: '1 Hacker Way, Menlo Park, CA 94025'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = Object.assign({},employee)
    updatedEmployee[key] = value;
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = Object.assign({},employee);
    delete updatedEmployee[key];
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}