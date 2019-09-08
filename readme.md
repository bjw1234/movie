# 抓取数据 request
  * 通过request抓取了html代码
  * cheerio将html转成了dom
  * 将需要的内容存在数组(名称|评分|地址|图片|id)
  * 返回结果数组并导出read方法

# 解析DOM结构 cheerio

# 那么如何运行呢？
  * window用户：

* cmd

```
set DEBUG=movie:* & node ./src/index.js
```

* powershell

```
$env:DEBUG='movie:*'; node ./src/index.js
```
