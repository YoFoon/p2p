// 生成随机的36位UUID
const uuidv4 = require('uuid/v4')
module.exports = () => {
  const uuid = uuidv4()
  return uuid.replace(/-/g, '')
}
