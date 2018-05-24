import { observable, action } from 'mobx'

class ListStore {
  @observable List = []

  @action addProduct  (data) {
    axios.post(API.add_product, data).then( (data) => {
      console.log(data)
    })
  }
}

export default ListStore
