const {DataTypes, Model, Sequelize} = require ('sequelize')
const sequelize = require('../bd')
const usuarios = new require('./usuario')
const tipo = new require('./tipo')
class Tarefa extends Model{}
Tarefa.init({
    Descrição: {
        type:DataTypes.STRING,
        allowNull: false
    },
    data_cad: {
        type:Sequelize.DATEONLY,
        allowNull: false
    },
    data_conc: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    prioridade:{
        type:DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Tarefa',
})
tipo.hasOne(Tarefa) // Muitos Pets tem muitas Doações N p/ N
Tarefa.belongsTo(tipo)

usuarios.hasMany(Tarefa)
Tarefa.belongsTo(usuarios)
sequelize.sync()
module.exports = Tarefa