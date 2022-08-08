USE sesac;

CREATE TABLE register(
	id VARCHAR(20) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL, 
    name VARCHAR(10) NOT NULL
);

DESC register;

INSERT INTO register VALUE("id", "pw", "name");

SELECT * FROM register;

delete from register where id="sd";