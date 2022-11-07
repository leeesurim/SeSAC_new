CREATE DATABASE SESAC;

USE SESAC;

CREATE TABLE MEMBER(
	ID VARCHAR(20) NOT NULL PRIMARY KEY,
    NAME VARCHAR(5) NOT NULL,
    AGE INT(2),
    GENDER VARCHAR(2) NOT NULL,
    EMAIL VARCHAR(50), 
    PROMOTION VARCHAR(2) DEFAULT 'X'
);

drop table member;

CREATE TABLE MEMBER(
	id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT(2),
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50), 
    promotion VARCHAR(2) DEFAULT 'X'
);

drop table member;

CREATE TABLE MEMBER(
	id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT(2),
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50), 
    promotion VARCHAR(2) DEFAULT 'x'
);

alter table member add column interest varchar(100);
alter table member modify column id varchar(10);
alter table member drop column age;
alter table member modify column gender varchar(2)  not null default '여';

DESC member;

CREATE TABLE user(
	ID varchar(10) not null primary key,
    name varchar(5) not null default '',
    birthday date not null
);

INSERT INTO user (ID, name, birthday) VALUES ('id1', '홍길동', '2022-08-01');
INSERT INTO user  VALUES ('id2', '홍길동', '2022-08-01');
INSERT INTO user (ID, birthday) VALUES ('id3', '2022-08-01');
INSERT INTO user  VALUES ('HA', '하토비', '2008-10-10');

select * from user;
select * from user where name='홍길동' AND ID='id1';
select * from user where name='홍길동' order by ID DESC;
select * from user order by ID DESC LIMIT 2;
select * from user LIMIT 2;

select name, birthday FROM user;

/* BETWEEN a AND b */
SELECT * FROM player WHERE height BETWEEN 160 AND 180; 
/* IN */
SELECT * FROM player WHERE position IN ('striker', 'goalkeeper');
SELECT * FROM player WHERE position = 'striker' OR position = 'goalkeeper';
/* LIKE _:  % : 0개 이상의 문자 */
SELECT * FROM user WHERE name LIKE '이%';

/* 모든 데이터를 선택해서 UPDATE */
UPDATE user SET name = '홍길동' WHERE ID != '' ;

select * from user;

delete from user where ID='LEE';

drop table user;

create table user(
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('F', 'M', '') default '',
    birthday DATE not null,
    age int(3) not null default 0
);


use sesac;
desc user;

select * from user;
insert into user values ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
insert into user values ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
insert into user values ('power80', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
insert into user values ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
insert into user values ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
insert into user values ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
insert into user values ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

delete from user where id = 'secysung';

select * from user order by birthday ASC;

select * from user where gender='M' ORDER BY name DESC;

select id, name from user where birthday LIKE '199%';

select * from user where birthday LIKE '%-06-%' ORDER BY birthday;

select * from user where gender='M' AND birthday LIKE '197%';

select * from user order by age DESC limit 3;

select * from user where age between 25 and 50;

select * from user where id='hong1234';
update user set pw='12345678' where id='hong1234';

select id from user;
delete from user where id='jungkrat';

SELECT * FROM user ORDER BY birthday ASC;
SELECT * FROM user WHERE gender='M' ORDER BY name DESC;
SELECT id, name FROM user WHERE birthday LIKE '199%';
SELECT * FROM user WHERE birthday LIKE '%-06-%' ORDER BY birthday;
SELECT * FROM user WHERE gender='M' AND birthday LIKE '197%';
SELECT * FROM user ORDER BY age DESC LIMIT 3;
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
UPDATE user SET pw='12345678' WHERE id='hong1234';
DELETE FROM user WHERE id='jungkrat';

