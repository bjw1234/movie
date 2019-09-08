/**
 * 爬取数据
 * 返回数组
 */
const rp = require('request-promise')
const cheerio = require('cheerio')
const debug = require('debug')('movie:read')

const read = async (url) => {
  debug('开始读取近期上映的电影')

  const options = {
    url,
    transform: (body) => {
      return cheerio.load(body)
    }
  }

  return rp(options).then(($) => {
    let result = []
    $('#screening ul.ui-slide-content > li.ui-slide-item').each((index, item) => {
      const el = $(item)
      const title = el.data('title')
      const rate = el.data('rate')
      const ticket = el.data('ticket')
      const id = ticket && ticket.match(/id=(\d+)/)[1]
      let img = el.find('img').attr('src')
      img = img && img.replace(/jpg$/, 'webp')
      if (!title || !rate || !img) return
      // 组装数据
      result.push({
        id,
        title,
        rate,
        img
      })
      debug(`正在读取电影：${title}`)
    })
    return result
  })
}

module.exports = read