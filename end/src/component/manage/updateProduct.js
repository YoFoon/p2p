const ProductInstance = require('../../mongo/product')
const Q = require('q');

const GetProduct = async ctx => {
  const SaveProduct = new ProductInstance()

  const productId = ctx.request.body.productId || ''
  const name = ctx.request.body.name || ''
  const des = ctx.request.body.des || ''
  const history_year_rate = ctx.request.body.history_year_rate || ''
  const year_rate = ctx.request.body.year_rate || ''
  const investment_time = ctx.request.body.investment_time || ''
  const start_money = ctx.request.body.start_money || ''
  const return_money = ctx.request.body.return_money || ''
  const type = ctx.request.body.type || ''
  const grade = ctx.request.body.grade || ''
  const logo = ctx.request.body.logo || ''

  const deferred = Q.defer();

  let data = {
    data: "",
    errCode: 500,
    msg: ''
  };

  console.log(productId)
  console.log(name)

  ProductInstance
    .find({productId})
    .exec( (err, item) => {
      if(err) {
        data.msg = err
        deferred.resolve(data);
        return;
      }
      console.log(productId)
      ProductInstance
        .update({
          productId
        }, {
          name,
          des,
          history_year_rate,
          year_rate,
          investment_time,
          start_money,
          return_money,
          type,
          grade,
          logo
        }, { 
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