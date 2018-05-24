const ProductInstance = require('../../mongo/product')
const getUid = require('../uitls/uuid');
const Q = require('q');

const AddProduct = async ctx => {
  const SaveProduct = new ProductInstance()
  
  const ctxBody = ctx.request.body
  ctxBody.productId = getUid()

  const deferred = Q.defer();

  let data = {
    data: '',
    errCode: 500,
    msg: ''
  }
  SaveProduct.addProduct(ctxBody, err => {
    if( err ) {
      data.msg = err
      deferred.resolve(data);
      return;
    }

    data.errCode = 200
    deferred.resolve(data);
  })

  ctx.body = await deferred.promise
}

module.exports = AddProduct