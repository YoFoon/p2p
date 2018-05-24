const NoticeInstance = require('../../mongo/notice')
const Q = require('q');

const GetNotice = async ctx => {
  const pageSize = +ctx.query.pageSize || 10
  const page = +ctx.query.page || 1

  const deferred = Q.defer();

  let data = {
    data: "",
    errCode: 500,
    msg: ''
  };

  NoticeInstance
    .find()
    .skip( pageSize * ( page - 1 ) )
    .limit( pageSize )
    .exec( (err, item) => {
      if(err) {
        data.msg = err
        deferred.resolve(data);
        return;
      }
      
      data.data = item
      data.errCode = 200
      deferred.resolve(data);
    } )

    ctx.body = await deferred.promise;
}

module.exports = GetNotice