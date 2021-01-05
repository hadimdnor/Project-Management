CREATE DATABASE project_manager;
\c project_manager

CREATE TABLE users(id SERIAL PRIMARY KEY, username TEXT, email TEXT, password_digest TEXT);

CREATE TABLE tasks(id SERIAL PRIMARY KEY, task_name TEXT, due_date TEXT, staff_id INTEGER, details TEXT);

INSERT INTO tasks(task_name, due_date, details) VALUES('Task 1 - Tic Tac Toe', '2021 January 10', 'Let''s start out with something fun - a game! Everyone will get a chance to be creative, and work through some really tough programming challenges – Let''s start out with something fun - a game! We''ll be making tic tac toe (knots and crosses). What a nice surprise! But it''s up to you to come up with a fun and interesting approach to this classic game. You will be working individually for this project, but we''ll be guiding you along the process and helping you as you go. Show us what you''ve got!');

INSERT INTO tasks (task_name, due_date, details) VALUES ('Task 2 - CRUD Apps', '2021 February 01', 'Make a web apps that requires you to use create, read, update and delete apps.');

-- SELECT * FROM users;
-- SELECT * FROM tasks;