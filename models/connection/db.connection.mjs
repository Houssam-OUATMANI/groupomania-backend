import Sequelize from 'sequelize'


const sequelize = new Sequelize('groupomania', 'root' , 'Bejaia06,12', {
    dialect : 'mysql' ,host : 'localhost'
})


export default sequelize