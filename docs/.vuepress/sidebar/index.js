const frontEnd = require('./front-end')
const backEnd = require('./back-end')
const design = require('./design')
const server = require('./server')
const dataBase = require('./data-base')
const diary = require('./diary')
const sidebar = {
  ...frontEnd,
  ...backEnd,
  ...server,
  ...dataBase,
  ...design,
  ...diary
}

module.exports = sidebar