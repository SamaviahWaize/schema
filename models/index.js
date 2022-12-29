const dbconfig =require('../config/dbconfig.js');

const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('connected')
})
.catch(err=>{
    console.log('Error'+err)
})

const db={}

db.Sequelize = Sequelize
db.Sequelize = sequelize

db.events = require ('./eventsModel.js')(sequelize, DataTypes)
db.members = require ('./membersModel.js')(sequelize, DataTypes)

db.Sequelize.sync({ force: false})
.then(()=>{
    console.log('synced')
})

module.exports = db