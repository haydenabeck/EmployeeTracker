const mysql = require('mysql');
const inquirer = require('inquirer');
const ctable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'employeeTracker_db',
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

const runSearch = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'rawlist',
      message: 'What would you like to do?',
      choices: [
        'Add a new department',
        'Find all departments',
        'Add a new role',
        'Find all roles',
        'Add a new employee',
        'Find all employees',
      ],
    })

    .then((answer) => {
      switch (answer.action) {
        case 'Add a new department':
          addDepartment();
          break;

        case 'Find all departments':
          departmentSearch();
          break;

        case 'Add a new role':
          addRole();
          break;

        case 'Find all roles':
          roleSearch();
          break;

        case 'Add a new employee':
          addEmployee();
          break;

        case 'Find all employees':
          employeeSearch();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

// Add a department
const addDepartment = () => {
  inquirer
    .prompt({
      type: 'input',
      name: 'departmentName',
      message: 'What department would you like to add?',
    })
    .then((answer) => {
      const query = 'INSERT INTO department SET ?';
      connection.query(query, { name: answer.departmentName }, (err, res) => {
        if (err) throw err;
        console.log("New department has been added")
        runSearch();
      });
    });
};

// Show all departments
const departmentSearch = () => {
  const query = 'SELECT * FROM department';
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    runSearch();
  });
};

// Add a role
const addRole = () => {
  inquirer
    .prompt([{
      type: 'input',
      name: 'title',
      message: 'What role would you like to add?',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What salary would you like to add?',

    },
    {
      type: 'input',
      name: 'department_id',
      message: 'What department id would you like to add?',

    }])

    .then((answer) => {
      const query = 'INSERT INTO role SET ?';
      connection.query(query, { title: answer.title, salary: answer.salary, department_id: answer.department_id, }, (err, res) => {
        if (err) throw err;
        console.log("New role has been added")
        runSearch();
      });
    });
};

// Show all roles
const roleSearch = () => {
  const query = 'SELECT * FROM role';
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    runSearch();
  });
};

// Add an employee
const addEmployee = () => {
  inquirer
    .prompt([{
      type: 'input',
      name: 'first_name',
      message: 'What is your first name?',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is your last name?',

    },
    {
      type: 'input',
      name: 'role_id',
      message: 'What role id would you like to add?',

    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'What manager id would you like to add?',

    }])

    .then((answer) => {
      const query = 'INSERT INTO employee SET ?';
      connection.query(query, { first_name: answer.first_name, last_name: answer.last_name, role_id: answer.role_id, manager_id: answer.manager_id}, (err, res) => {
        if (err) throw err;
        console.log("New employee has been added")
        runSearch();
      });
    });
};

// Show all employees
const employeeSearch = () => {
  const query = 'SELECT * FROM employee';
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    runSearch();
  });
};

// // Update an employee role
// const updateEmployeeRoles = () => {
//   inquirer
//     .prompt([{
//       type: 'input',
//       name: 'newRole',
//       message: 'What is your new role id?',
//     }])

//     .then((answer) => {
//       const query = 'UPDATE employee SET role_id WHERE id = 1';
//       connection.query(query, { role_id: answer.newRole, }, (err, res) => {
//         if (err) throw err;
//         console.log("New employee role has been added")
//         runSearch();
//       });
//     });
// };
