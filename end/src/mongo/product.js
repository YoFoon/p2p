const mongoose = require('./connect')

let ProductSchema = new mongoose.Schema({
  productId: String,
  name: String,                 // 项目名称
  des: String,                  // 项目描述
  history_year_rate: String,    // 历史年化
  year_rate: String,            // 综合年化
  investment_time: String,      // 投资期限
  start_money: String,          // 起投金额
  return_money: String,         // 返回
  type: String,                 // 项目系别
  grade: String,                // 项目评级
  logo: String,                 // logo
  recommend: String,            // 项目推荐分类
  onLine: String,               // 判断项目上下线
  add_time: String              // 添加时间
})

//为ProductSchema模型追加addProduct方法
ProductSchema.methods.addProduct = function (params, callback) {
    this.productId = params.productId,
    this.name = params.name                 // 项目名称
    this.des = params.des                  // 项目描述
    this.history_year_rate = params.history_year_rate
    this.year_rate = params.year_rate
    this.investment_time = params.investment_time
    this.start_money = params.start_money
    this.return_money = params.return_money
    this.type = params.type
    this.grade = params.grade
    this.logo = params.logo
    this.recommend = params.recommend || '0',
    this.onLine = params.onLine || '1'
    this.add_time = new Date().getTime()

    this.save(callback)
}


// products 是数据库的一个集合
let Product = mongoose.model('products', ProductSchema)

module.exports = Product