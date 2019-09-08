/**
 * 连接数据库
 * 导出query方法
 */
const mysql = require('mysql')
const bluebird = require('bluebird')

// 创建连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '336800',
  database: 'my_movie'
})

connection.connect()

module.exports = bluebird.promisify(connection.query).bind(connection)
