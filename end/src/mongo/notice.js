const mongoose = require('./connect')

let NoticeSchema = new mongoose.Schema({
    id: String,
    title: String,
    content: String,
    time: String
})

//为UserScheme模型追加addUser方法
NoticeSchema.methods.addNotice = function (params, callback) {
    this.id = params.id
    this.title = params.title
    this.content = params.conent
    this.time = params.time

    this.save(callback)
}


let Notice = mongoose.model('notice', NoticeSchema)

module.exports = Notice