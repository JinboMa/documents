const frontEnd = require('./front-end')
const backEnd = require('./back-end')
const design = require('./design')
const server = require('./server')
const dataBase = require('./data-base')
const diary = require('./diary')
const share = require('./share')
const page = require('./page')
const sidebar = {
  ...frontEnd,
  ...backEnd,
  ...server,
  ...dataBase,
  ...design,
  ...diary,
  ...share,
  ...page
}

module.exports = sidebar