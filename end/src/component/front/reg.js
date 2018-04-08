const UserInstance = require('../../mongo/user')
const crypto = require('crypto');
const hash = crypto.createHash('md5');
const Q = require('q');
const getUid = require('../uitls/uuid');

const Reg = async ctx => {
  const SaveUser = new UserInstance()
  const username = ctx.request.body.username;
  const password = hash.update(ctx.request.body.password).digest('hex');
  const userId = getUid()

  const deferred = Q.defer();

  let data = {
    data: "",
    errCode: 500,
    msg: ''
  };

  UserInstance
    .find({name: username})
    .exec( (err, item) => {
      if(err ) {
        data.msg = err
        deferred.resolve(data);
        return;
      }

      if (item.length) {
        data.msg = "用户名已经存在"
        deferred.resolve(data);
        return
      }

      SaveUser.addUser({
        username,
        password,
        userId
      }, err1 => {
        if( err1 ) {
          data.meg = err1
          deferred.resolve(data);
          return;
        }
    
        data.errCode = 200
        deferred.resolve(data);
      })

    } )

  ctx.body = await deferred.promise;
  
}

module.exports = Reg;