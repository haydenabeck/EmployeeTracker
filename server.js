const mysql = require('mysql');
const inquirer = require('inquirer');

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
        'Would you like to add a new department?',
        'Would you like to view departments?',
        'Would you like to add a new role?',
        'Would you like to view roles?',
        'Would you like to add a new employee?',
        'Would you like to view employees?',
        'Would you like to update employee roles?',
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
        case 'Update employee roles':
          updateEmployeeRoles();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};


const addDepartment = () => {
  inquirer
    .prompt({
        type: 'list',
        name: '',
        message: 'What department would you like to add?',
        choices: ['']
    })
    .then((answer) => {
      const query = 'SELECT position, song, year FROM top5000 WHERE ?';
      connection.query(query, { artist: answer.artist }, (err, res) => {
        res.forEach(({ position, song, year }) => {
          console.log(
            `Position: ${position} || Song: ${song} || Year: ${year}`
          );
        });
        runSearch();
      });
    });
};













const departmentSearch = () => {
  inquirer
    .prompt({
        type: 'list',
        name: '',
        message: 'What department would you like to add?',
        choices: ['']
    })
    .then((answer) => {
      const query = 'SELECT position, song, year FROM top5000 WHERE ?';
      connection.query(query, { artist: answer.artist }, (err, res) => {
        res.forEach(({ position, song, year }) => {
          console.log(
            `Position: ${position} || Song: ${song} || Year: ${year}`
          );
        });
        runSearch();
      });
    });
};