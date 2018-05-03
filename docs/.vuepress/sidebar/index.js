const frontEnd = require('./front-end')
const backEnd = require('./back-end')
const design = require('./design')
const server = require('./server')
const dataBase = require('./data-base')
const sidebar = {
  ...frontEnd,
  ...backEnd,
  ...server,
  ...dataBase,
  ...design
}

module.exports = sidebar