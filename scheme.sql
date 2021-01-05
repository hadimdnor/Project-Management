CREATE DATABASE project_manager;
\c project_manager

CREATE TABLE users (id SERIAL PRIMARY KEY, username TEXT, email TEXT, password TEXT);

SELECT * FROM user;