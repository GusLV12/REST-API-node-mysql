CREATE DATABASE IF NOT EXISTs companydb;

USE companydb;

CREATE TABLE employee (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(5) DEFAULT NULL,
  PRIMARY KEY (id)
);

INSERT INTO employee (name, salary) VALUES
('Alice Johnson', 50000),
('Bob Smith', 45000),
('Charlie Brown', 48000),
('David Wilson', 52000),
('Emma Davis', 51000),
('Frank Miller', 47000),
('Grace Lee', 49000),
('Hannah White', 53000),
('Irene Harris', 50000),
('Jack Lewis', 45000),
('Katie Walker', 48000),
('Liam Hall', 52000),
('Mia Young', 51000),
('Noah Allen', 47000),
('Olivia King', 49000),
('Paul Wright', 53000),
('Quincy Scott', 50000),
('Rachel Green', 45000),
('Samuel Baker', 48000),
('Tina Nelson', 52000);

DESC employee;