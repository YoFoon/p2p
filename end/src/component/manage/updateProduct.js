const ProductInstance = require('../../mongo/product')
const Q = require('q');

const GetProduct = async ctx => {
  const SaveProduct = new ProductInstance()
  const ctxBody = ctx.request.body
  const productId = ctx.request.body.productId || ''
  
  const deferred = Q.defer();

  let data = {
    data: "",
    errCode: 500,
    msg: ''
  };

  ProductInstance
    .find({productId})
    .exec( (err, item) => {
      if(err) {
        data.msg = err
        deferred.resolve(data);
        return;
      }
      ProductInstance
        .update({
          productId
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

module.exports = GetProduct