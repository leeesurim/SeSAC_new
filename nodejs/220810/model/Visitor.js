const Visitor = (Sequelize, DataTypes ) => {
    // Sequelize는 model/index.js에서의 sequelize
    // DataTypes는 model/index.js에서의 Sequelize 

    // DB가 있는 객체에 define 함수를 연결
    const model = Sequelize.define(
        'visitor',
        {   // create ~~ (id int not null auto_increment primary key)
            id: {
                // id int
                type: DataTypes.INTEGER,
                // not null
                allowNull: false,
                // primary key
                primaryKey: true,
                // auto_increment
                autoIncrement: true,
            },
            name: { // name varchar(10) not null
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            comment: { // comment mediumtext
                type: DataTypes.TEXT('medium'),

                // allowNull: ture 해도 되지만 기본값이라서 안해도 됨.
            }
        },

        {
            // true로 지정하게 되면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어짐
            timestamps: false, 
            // 테이블 이름
            tableName: 'visitor',
            // 테이블 이름을 내가 정한 것으로 고정(이 설정 안하면 자동으로 visitors로 됨)
            freezeTableName: true,
        }
    );
    // const model 사용할 수 있도록 내보내기
    return model;
}

module.exports = Visitor;