const employees = [
    {
        id: 1, name: "Gatduel Riek", age: 27, department: "IT", salary: 7000000
    },

    {
        id: 2, name: "Wood Wilson", age: 26, department: "ICT", salary: 500000
    },

    {
        id: 3, name: "Anthony Martial", age: 22, department: "Football", salary: 2500000
    },

    {
        id: 4, name: "Swan Pelican", age: 30, department: "Music Industry", salary: 100000000
    },

    {
        id: 5, name: "Juan Frank", age: 60, department: "Business Management", salary: 3000000
    },
];

// Function to display all employees at once

function displayEmployees() {

    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeeDetails').innerHTML = totalEmployees;
}

// This function will calculate total salaries
function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
    }

// This function will display employees department
function displayITEmployees() {
         const itEmployees = employees.filter(employee => employee.department === 'IT');
            if (itEmployees.length === 0) {
                document.getElementById('employeeDetails').innerHTML = '<p>No IT employees found.</p>';
                return;
            }
            document.getElementById('employeeDetails').innerHTML = itEmployeesEmployeesDisplay;
}

// This function will display employee IDs
function findEmployeeById(employeeId) {
            const id = Number(employeeId);
            const foundEmployee = employees.find(employee => employee.id === id);
            if (foundEmployee) {
            document.getElementById('employeeDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
            } else {
                document.getElementById('employeeDetails').innerHTML = '<p>No employee found with this ID.</p>';
            }
   }