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

      ctx.cookies.set(
        'id', item.userId, {
            domain:'localhost', // 写cookie所在的域名
            path:'/',       // 写cookie所在的路径
            maxAge: 2*60*60*1000,   // cookie有效时长
            expires:new Date('2018-06-11'), // cookie失效时间
            httpOnly:false,  // 是否只用于http请求中获取
            overwrite:false  // 是否允许重写
        }
    );
      data.errCode = 200;
      deferred.resolve(data);
    } )

    ctx.body = await deferred.promise;
}

module.exports = Login