// const { describe } = require('node:test')

const str = `| 我爱音乐 | 1000 | 4000 |
| --- | --- | --- |
| 绿韵铃燕 | 2000 | 3460 |
| 毛毡蛋糕 | 5000 | 760 |
| 樱花台 | 10000 | 560 |
| 冬日温暖 | 20000 | 460 |
| 夏季恋歌 | 33440 | 300 |
| 万众瞩目 | 50000 | 250 |
| 黑白天使 | 100000 | 100 |
| 深海龙女 | 200000 | 80 |
| 机械之心 | 520000 | 30 |`
const objArr = []
str.split('\n').forEach((item) => {
  const obj = {}
  item.split('|').forEach((value, idx) => {
    //parseFloat(value).toFixed(2)
    switch (idx) {
      case 1:
        obj['name'] = value.trim()
        break
      case 2:
        obj['value'] = value.trim()
        break
      case 3:
        obj['probability'] = value.trim()
        break
    }
  })
  objArr.push(obj)
})
console.dir(objArr)
