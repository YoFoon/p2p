const mongoose = require('./connect')

let UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    userId: String,
    email: String,
    phone: String,
    regTime: String
})

//为UserScheme模型追加addUser方法
UserSchema.methods.addUser = function (params, callback) {
    this.name = params.username
    this.password = params.password
    this.userId = params.userId
    this.email = params.email || ''
    this.phone = params.phone || ''
    this.regTime = new Date().getTime()

    this.save(callback)
}


// users 是数据库的一个集合
let User = mongoose.model('users', UserSchema)

module.exports = User