const mongoose = require('./connect')

let ProductSchema = new mongoose.Schema({
  productId: String,
  name: String,                 // 项目名称
  des: String,                  // 项目描述
  yuqi_nianhua: String,         // 平台预期年化
  history_year_rate: String,    // 历史年化
  year_rate: String,            // 综合年化
  investment_time: String,      // 投资期限
  danbi_xiane: String,          // 单笔限额
  start_money: String,          // 起投金额
  return_money: String,         // 最高返利
  type: String,                 // 项目系别
  grade: String,                // 项目评级
  logo: String,                 // logo
  recommend: String,            // 项目推荐分类
  onLine: String,               // 判断项目上下线
  add_time: String,             // 添加时间
  url: String,                  // 立即体验链接
  type: String,                 // 项目系别
  rebate: String,               // 返利方案
  companyDes: String,           // 公司简介
  plateDes: String              // 平台简介
})

//为ProductSchema模型追加addProduct方法
ProductSchema.methods.addProduct = function (params, callback) {
    this.productId = params.productId,
    this.name = params.name
    this.des = params.des
    this.yuqi_nianhua = params.yuqi_nianhua
    this.history_year_rate = params.history_year_rate
    this.year_rate = params.year_rate
    this.investment_time = params.investment_time
    this.danbi_xiane = params.danbi_xiane
    this.start_money = params.start_money
    this.return_money = params.return_money
    this.type = params.type
    this.grade = params.grade
    this.logo = params.logo
    this.recommend = params.recommend
    this.onLine = params.onLine
    this.add_time = params.add_time
    this.url = params.url
    this.type = params.type
    this.rebate = params.rebate
    this.companyDes = params.companyDes
    this.plateDes = params.plateDes
    this.save(callback)
}


// products 是数据库的一个集合
let Product = mongoose.model('products', ProductSchema)

module.exports = Product