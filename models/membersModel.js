module.exports = (sequelize,DataTypes) =>{
    const Member = sequelize.define("member",{
        studentid: {
            type: DataTypes.Integer,
            allowNull:false
          },
          year: {
            type: DataTypes.Integer,
            allowNull:false
          },
          domain: {
            type: DataTypes.String,
            allowNull:false
          },
          branch: {
            type: DataTypes.String,
            allowNull:false
          },
          email: {
            type: DataTypes.String,
            allowNull:false
          },
          cardName: {
            type: DataTypes.String,
            allowNull:false
          },
          cardDesignation: {
            type: DataTypes.String,
            allowNull:false
          },
          images: {
            type: DataTypes.String
          },
          links: {
            github: {
                type: DataTypes.String
            },
            linkdin: {
                type: DataTypes.String
            },
            instagram: {
                type: DataTypes.String
            },
          },
    })
    return Member
}