const NoticeInstance = require('../../mongo/notice')
const Q = require('q');

const UpdateNotice = async ctx => {
  const ctxBody = ctx.request.body
  const id = ctx.request.body.id
  
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
      NoticeInstance
        .update({
          id
        }, ctxBody, { 
          multi: true 
        }, err => {
          if (err) {
            data.msg = err
            deferred.resolve(data);
            return;
          }

          data.errCode = 200
          deferred.resolve(data);
        })
    })

    ctx.body = await deferred.promise;
}

module.exports = UpdateNotice