/**
 * 将数据写入数据库
 * 导出write方法
 */
const sql = require('./sql')
const debug = require('debug')('movie:write')

const write = async (movies) => {
  debug('开始写入电影')

  for (let movie of movies) {
    let oldMoves = await sql('SELECT * FROM movies WHERE id=? LIMIT 1', [movie.id])
    if (Array.isArray(oldMoves) && oldMoves.length) {
      // 更新数据
      let old = oldMoves[0]
      await sql('UPDATE movies SET title=?, rate=?, img=? WHERE id=?', [movie.title, movie.rate, movie.img, movie.id])
    } else {
      // 插入数据
      await sql('INSERT INTO movies(id,title,rate,img) VALUES(?,?,?,?)', [movie.id, movie.title, movie.rate, movie.img])
    }

    debug(`正在写入电影：${movie.title}`)
  }
}

module.exports = write