DROP DATABASE IF EXISTS sushi_db;

CREATE DATABASE sushi_db;

use sushi_db;

CREATE TABLE sushi (
	id INT AUTO_INCREMENT NOT NULL,
    sushi_name VARCHAR(30) NOT NULL,
    eaten BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

