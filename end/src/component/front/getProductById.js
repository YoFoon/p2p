const ProductInstance = require('../../mongo/product')
const Q = require('q');

const GetProductById = async ctx => {
  const productId = ctx.query.productId || ''

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
      
      data.data = item
      data.errCode = 200
      deferred.resolve(data);
    } )

    ctx.body = await deferred.promise;
}

module.exports = GetProductById