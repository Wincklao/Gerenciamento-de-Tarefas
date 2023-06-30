const {DataTypes, Model} = require ('sequelize')
const sequelize = require('../bd')
class Usuario extends Model{}
Usuario.init({
    nome: {
        type:DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Usuario',
})
sequelize.sync()
module.exports = Usuario