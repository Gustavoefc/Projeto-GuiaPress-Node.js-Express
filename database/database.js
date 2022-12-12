// IMPORTANDO O SEQUELIZE PARA DENTRO DO BANCO DE DADOS E CONECTANDO

const Sequelize = require('sequelize')

const connection = new Sequelize('guipress', 'root', '335490Gu', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-03:00'
})

module.exports = connection
