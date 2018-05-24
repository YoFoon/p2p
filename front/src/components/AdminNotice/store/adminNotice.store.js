import { observable, action } from 'mobx'

class AdminNoticeStore {
  @observable noticeList = []
  @observable noticeDetail = {}

  @action getNoticeList () {
    axios.get(API.get_notice_list).then( (data) => {
      this.noticeList = data
    })
  }

  @action getNoticeById(id) {
    axios.get(API.get_notice_by_id,{params:{id}}).then(data => {
      this.noticeDetail = data    
    })
  }

  @action addNotice(data) {
    axios.post(API.add_notice, data).then(res => {
      console.log(res)
    })
  }

  @action updateNotice(data) {
    axios.post(API.update_notice, data).then(res => {
      console.log(res)
    })
  }
}

export default AdminNoticeStore
