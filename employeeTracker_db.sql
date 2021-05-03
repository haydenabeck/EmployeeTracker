DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;
USE employeeTracker_db;


CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
);

CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL (10,2)
  department_id INT PRIMARY KEY(id)
);

CREATE TABLE role (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT VARCHAR(30),
  manager_id INT VARCHAR(30) NULL,
  department_id PRIMARY KEY(id)
);