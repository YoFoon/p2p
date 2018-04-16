import { observable, action } from 'mobx'

class HomeStore {
  @observable RecommendList = []
  @observable List = []

  @action getRecommendProduct() {
    axios.get(API.get_recommend_product).then( (data) => {
      this.RecommendList = data
    })
  }

  @action getProductList () {
    axios.get(API.get_product_list).then( (data) => {
      this.List = data
    })
  }
}

export default HomeStore
