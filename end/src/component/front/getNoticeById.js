const NoticeInstance = require('../../mongo/notice')
const Q = require('q');

const GetNoticeById = async ctx => {
  const id = ctx.query.id || ''

  const deferred = Q.defer();

  let data = {
    data: "",
    errCode: 500,
    msg: ''
  };

  NoticeInstance
    .find({id})
    .exec( (err, item) => {
      if(err) {
        data.msg = err
        deferred.resolve(data);
        return;
      }
      
      data.data = item[0]
      data.errCode = 200
      deferred.resolve(data);
    } )

    ctx.body = await deferred.promise;
}

module.exports = GetNoticeById