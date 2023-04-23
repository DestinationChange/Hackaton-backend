DROP DATABASE IF EXISTS destinationchange;
CREATE DATABASE destinationchange;

\c destinationchange;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  region_id INT,
  about TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  image TEXT
);

CREATE TABLE region (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS projectDescription;
CREATE TABLE projectDescription(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

