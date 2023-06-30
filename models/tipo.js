const {DataTypes, Model} = require ('sequelize')
const sequelize = require('../bd')
class Tipo extends Model{}
Tipo.init({
    Descrição: {
        type:DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Tipo',
})
sequelize.sync()
module.exports = Tipo