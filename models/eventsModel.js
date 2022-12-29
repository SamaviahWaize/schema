
module.exports = (sequelize,DataTypes) =>{
    const Event = sequelize.define("event",{
        topic: {
            type: DataTypes.String,
            allowNull:false
          },
        type: {
            type: DataTypes.String,
            allowNull:false
          },
        date: {
            type: DataTypes.Date,
            allowNull:false
        },
        starttime: {
            type: DataTypes.Time,
            allowNull:false
          },
        endtime: {
            type: DataTypes.Time,
            allowNull:false
          },
        coordinatername: {
            type: DataTypes.String,
            allowNull:false
          },
        venue: {
            type: DataTypes.String,
            allowNull:false
          },
        numberoffacultyinvolved: {
            type: DataTypes.Integer
          },
        numberofsocietymembersinvolved: {
            type: DataTypes.Integer
          },
        numberofattendees: {
            type: DataTypes.Integer
          },
        
    })
    return Event
}