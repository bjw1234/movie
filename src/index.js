const read = require('./read')
const write = require('./write')

const url = 'https://movie.douban.com';

(async () => {
  // 抓取页面数据
  const movies = await read(url)
  // 写入数据库
  await write(movies)
  // 退出程序
  process.exit()
})()