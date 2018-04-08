const fs = require('fs');
const Test = async ctx => {
  ctx.type = 'html'
  ctx.body = fs.createReadStream('html/index.html')
}

module.exports = Test;