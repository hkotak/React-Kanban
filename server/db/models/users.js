const bookshelf = require('./bookshelf')

const Users = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true
})

module.exports = Users