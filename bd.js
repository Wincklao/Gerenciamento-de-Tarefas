const {Sequelize} = require('sequelize')
const schema = 'teste'
const sequelize = new Sequelize(
    schema, 'root', '', { // Nome do Banco, usuário, senha
        host: 'localhost', // Caminho: ip ou nome DNS
        dialect: 'mysql', // Banco de dados (SGBD) utilizado
        charset: 'utf8', // tabela de caracteres
        collate: 'utf8_unicode_ci', // Colação
        timezone: "-03:00" // Timezone
    })
try {
    sequelize.authenticate() // Método que autentica e cria a conexão
    console.log('Conectado ao Banco: '+ schema)
} catch (erro) {
    console.log('Não foi possível conectar: '+ schema, erro)
}
module.exports = sequelize