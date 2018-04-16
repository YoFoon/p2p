import { observable, action } from 'mobx'

class ListStore {
  @observable List = []

  @action getProductList () {
    axios.get(API.get_product_list).then( (data) => {
      this.List = data
    })
  }
}

export default ListStore
