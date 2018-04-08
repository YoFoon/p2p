const UserInstance = require('../../mongo/user')
const crypto = require('crypto');
const hash = crypto.createHash('md5');
const Q = require('q');

const Login = async ctx => {
  const username = ctx.request.body.username;
  const password = ctx.request.body.password

  const deferred = Q.defer();

  let data = {
    data: "",
    errCode: 500,
    msg: ''
  };
  UserInstance
    .find({name: username})
    .exec( function(err, item) {
      if(err || item.length == 0) {
        data.msg = err
        deferred.resolve(data);
        return;
      }

      if(item[0].password != password ) {
          data.msg = "密码不正确";
          deferred.resolve(data);
          return;
      }

      data.errCode = 200;
      deferred.resolve(data);
    } )

    ctx.body = await deferred.promise;
}

module.exports = Login