import Sequelize from 'sequelize'

import sequelize from '../connection/db.connection.mjs'


const User = sequelize.define("user", {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    fullName : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    },
    Date : {
        type : Sequelize.DATE
    }
})

export default User