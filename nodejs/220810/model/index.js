const Sequelize = require("sequelize");
// config에서 개발환경
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

// new로 만든 것을 전달. 사용하지 않아도 전달.
db.sequelize = Sequelize;
db.sequelize = sequelize;

// module.exports = {"sequelize": sequelize, "sequelize": sequelize}

// require하고 () 함수를 실행, requile한 거랑 new한 것 보내기
db.Visitor = require("./visitor")(sequelize, Sequelize);
//model/Visitors.js 에서 함수가 실행되고 return된 model

/*
위 내용 풀어쓰기
const a = require("./Visitor");
const b = a(sequelize, Sequelize);
*/

db.User = require("./User")(sequelize, Sequelize);

module.exports = db;
