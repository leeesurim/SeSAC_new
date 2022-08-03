USE SQL_DDL;

CREATE TABLE USER (
	id VARCHAR(10) NOT NULL PRIMARY KEY,
    PW VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

DESC USER;


INSERT INTO USER VALUES ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO USER VALUES ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO USER VALUES ('power80', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO USER VALUES ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO USER VALUES ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO USER VALUES ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO USER VALUES ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

SELECT * FROM USER;

SELECT * FROM user ORDER BY birthday ASC;
SELECT * FROM user WHERE gender='M' ORDER BY name DESC;
SELECT id, name FROM user WHERE birthday LIKE '199%';
SELECT * FROM user WHERE birthday LIKE '%-06-%' ORDER BY birthday;
SELECT * FROM user WHERE gender='M' AND birthdy LIKE '197%';
SELECT * FROM user ORDER BY age DESC LIMIT 3;
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
UPDATE user SET pw='12345678' WHERE id='hong1234';
DELETE FROM user WHERE id='jungkrat';