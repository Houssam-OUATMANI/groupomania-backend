import Sequelize from 'sequelize'


const sequelize = new Sequelize('groupomania', 'root' , 'root', {
    dialect : 'mysql' ,host : 'localhost'
})


export default sequelize
