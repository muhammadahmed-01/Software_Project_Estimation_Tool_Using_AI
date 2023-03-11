create database SPETUAI;
use SPETUAI;

CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50),
    password VARCHAR(100),
    role VARCHAR(50),
    PRIMARY KEY (user_id)
);

create table tasks (
    task_id INT NOT NULL AUTO_INCREMENT,
	skill INT NOT NULL,
	complexity INT NOT NULL,
    status VARCHAR(20) NOT NULL,
    estimated_time INT NOT NULL,
    name varchar(50) NOT NULL,
    parent_id INT NULL,
    assignee_id INT NULL,
    project_id INT NOT NULL,
	PRIMARY KEY (task_id)
);

ALTER TABLE tasks
ADD CONSTRAINT fk1 FOREIGN KEY (parent_id)
REFERENCES tasks (task_id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE tasks
ADD CONSTRAINT fk4 FOREIGN KEY (assignee_id)
REFERENCES users(user_id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE tasks
ADD CONSTRAINT fk5 FOREIGN KEY (project_id)
REFERENCES projects(project_id)
ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE requirements (
    requirements_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    priority INT NOT NULL,
    project_id INT NOT NULL,
    PRIMARY KEY (requirements_id)
);

ALTER TABLE requirements 
ADD CONSTRAINT fk2 FOREIGN KEY (project_id) 
REFERENCES projects(project_id) ON DELETE CASCADE;


CREATE TABLE projects (
    project_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    start_date DATE,
    end_date DATE,
    supervisor_id INT NOT NULL,
    PRIMARY KEY (project_id)
);

ALTER TABLE projects
ADD CONSTRAINT fk3 FOREIGN KEY (supervisor_id) 
REFERENCES users(user_id);    


select * from users;
select * from tasks where project_id=0 and assignee_id=0;

GRANT ALL PRIVILEGES ON spetuai.* TO 'standard'@'%';

INSERT INTO users (username, password, role) VALUES
('john_doe', 'password123', 'estimator'),
('jane_doe', 'password456', 'estimator'),
('bob_smith', 'password789', 'reviewer'),
('jimmy_hendrix', 'password012', 'admin');

INSERT INTO projects (name, description, start_date, end_date, supervisor_id) VALUES
('Project A', 'This is a project description for Project A', '2022-01-01', '2022-06-30', 1),
('Project B', 'This is a project description for Project B', '2022-02-01', '2022-07-31', 2),
('Project C', 'This is a project description for Project C', '2022-03-01', '2022-08-31', 1);

INSERT INTO requirements (name, description, priority, project_id) VALUES
('Requirement A', 'This is a requirement for Project A', 1, 1),
('Requirement B', 'This is another requirement for Project A', 2, 1),
('Requirement C', 'This is a requirement for Project B', 3, 2),
('Requirement D', 'This is another requirement for Project B', 1, 2),
('Requirement E', 'This is a requirement for Project C', 2, 3);

INSERT INTO tasks (skill, complexity, status, estimated_time, name, parent_id, assignee_id, project_id) 
VALUES (2, 3, 'pending', 8, 'Task 1', null, null, 1),
(3, 5, 'rejected', 10, 'Task 2', null, null, 1),
(4, 7, 'approved', 20, 'Task 3', null, null, 2),
(3, 2, 'approved', 6, 'Task 4', null, null, 2),
(1, 1, 'pending', 2, 'Task 5', null, null, 3),
(2, 4, 'approved', 12, 'Task 6', null, null, 3);

select * from tasks