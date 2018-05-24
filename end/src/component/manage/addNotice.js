const NoticeInstance = require('../../mongo/notice')
const crypto = require('crypto');
const hash = crypto.createHash('md5');
const Q = require('q');
const getUid = require('../uitls/uuid');

const AddNotice = async ctx => {
  const SaveNotice = new NoticeInstance()
  const id = getUid()
  const title = ctx.request.body.title
  const content = ctx.request.body.content
  const time = ctx.request.body.time

  const deferred = Q.defer();

  let data = {
    data: "",
    errCode: 500,
    msg: ''
  };

  SaveNotice.addNotice({
    id,
    title,
    content,
    time
  }, err => {
    if( err ) {
      data.meg = err
      deferred.resolve(data);
      return;
    }

    data.errCode = 200
    deferred.resolve(data);
  })


  ctx.body = await deferred.promise;
  
}

module.exports = AddNotice;