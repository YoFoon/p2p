import { observable, action } from 'mobx'

class ListStore {
  @observable detailData = {}

  @action getProductById  (id) {
    axios.get(API.get_product_by_id, {params: {productId: id}}).then( (data) => {
      this.detailData = data
    })
  }
}

export default ListStore
