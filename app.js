const inquirer = require('inquirer');

// Main menu 
const mainMenuPrompt = () => {
    return inquirer.prompt([
    {
        type: 'list',
        name: '',
        message: 'What would you like to view?',
        choices: ['Employee', 'Role', 'Department']
    }
    ])
}

// Add Department 
const addDepartmentPrompt = () => {
    return inquirer.prompt([
    {
        type: 'list',
        name: '',
        message: 'Would you like to add a new department?',
        choices: ['Yes', 'No']
    }
    ])
}

// Department Questions

const departmentPrompt = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'departmentName',
        message: 'What is your department?',
      },
    ]);
};

// Add Role 
const addRolePrompt = () => {
    return inquirer.prompt([
    {
        type: 'list',
        name: '',
        message: 'Would you like to add a new role',
        choices: ['Yes', 'No']
    }
    ])
}

// Role Questions
const rolePrompt = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'roleTitle',
        message: 'What is your role?',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'What is your salary?',
      },
      {
        type: 'input',
        name: 'departmentID',
        message: 'What is your department ID?',
      },
    ]);
};

// Add Employee 
const addEmployeePrompt = () => {
    return inquirer.prompt([
    {
        type: 'list',
        name: '',
        message: 'Would you like to add a new department?',
        choices: ['Yes', 'No']
    }
    ])
}

// Employee Questions
const employeePrompt = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'What is your first name?',
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'What is your last name?',
    },
    {
      type: 'input',
      name: 'role',
      message: 'What is your role?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'what is your ID?',
    },
    {
      type: 'input',
      name: 'managerID',
      message: 'what is your manager ID?',
    },
  ]);
};



