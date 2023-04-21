const employee = {
    name: "Sam",
    streetAddress: "111 Broadway",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
};

const newEmpl = updateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "11 Broadway"
);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};

destructivelyUpdateEmployeeWithKeyAndValue(
    employee, 
    "streetAddress", 
    "12 Broadway"
);

function deleteFromEmployeeByKey(employee) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
};

let newEmployee = deleteFromEmployeeByKey(employee);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
};




