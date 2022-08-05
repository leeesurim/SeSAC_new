USE SESAC;

CREATE TABLE visitor (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment mediumtext
);

DESC visitor;

INSERT INTO visitor VALUES (1, "홍길동", "내가 왔다");

SELECT * FROM visitor;