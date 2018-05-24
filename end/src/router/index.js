const path = "/api/v1"  // 前端页面接口
const path1 = "/api/v2" // 后台管理接口

const Test = require("./../component/test")
const Html = require('../component/front/html')
const Reg = require('../component/front/reg')
const Login = require('../component/front/login')
const GetProduct = require('../component/front/getProduct')
const GetProductById = require('../component/front/getProductById')
const GetProduct1 = require('../component/manage/getProduct')
const AddProduct = require('../component/manage/addProduct')
const UpdateProduct = require('../component/manage/updateProduct')
const GetRecommendProduct = require('../component/front/getRecommendProduct')
const AddNotice = require('../component/manage/addNotice')
const UpdateNotice = require('../component/manage/updateNotice')
const GetNotice = require('../component/front/getNotice')
const GetNoticeById = require('../component/front/getNoticeById')

module.exports = async function(router) {
  
  router.get("/", Html)

  router.get("/test", Test)
  
  router.post(`${path}/reg`, Reg) // 注册

  router.post(`${path}/login`, Login)  // 登录

  router.post(`${path1}/add_notice`, AddNotice) // 添加公告

  router.post(`${path1}/update_notice`, UpdateNotice) // 更新公告

  router.get(`${path}/get_notice_list`, GetNotice) // 获取公告列表

  router.get(`${path}/get_notice_by_id`, GetNoticeById) // 获取公告

  router.get(`${path}/get_recommend_product`, GetRecommendProduct) //获取推荐的项目

  router.get(`${path}/get_product`, GetProduct) // 获取项目列表

  router.get(`${path}/get_product_by_id`, GetProductById) // 根据id获取项目

  router.post(`${path1}/add_product`, AddProduct) // 添加项目

  router.get(`${path1}/get_product`, GetProduct1) // 后台管理页面获取项目列表

  router.post(`${path1}/update_product`, UpdateProduct) // 更新项目

  router.get(`${path1}/get_product_by_id`, GetProductById) // 后台管理页面根据id获取项目
}