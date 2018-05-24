let path = './api/v1'
let path1 = './api/v2'
if (process.env.NODE_ENV === 'development') {
  path = 'http://localhost:8008/api/v1'
  path1 = 'http://localhost:8008/api/v2'
}

const API = {
  get_recommend_product: `${path}/get_recommend_product`,
  get_product_list: `${path}/get_product`,
  add_product: `${path1}/add_product`,
  get_product_by_id: `${path}/get_product_by_id`,
  get_notice_list: `${path}/get_notice_list`,
  get_notice_by_id: `${path}/get_notice_by_id`,
  add_notice: `${path1}/add_notice`,
  update_notice: `${path1}/update_notice`
}

export default API