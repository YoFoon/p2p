let path = './api/v1'
if (process.env.NODE_ENV === 'development') {
  path = 'http://localhost:8008/api/v1'
}
module.exports = {
  get_recommend_product: `${path}/get_recommend_product`,
  get_product_list: `${path}/get_product`
}