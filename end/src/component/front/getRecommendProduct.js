const ProductInstance = require('../../mongo/product')
const Q = require('q');

const GetProduct = async ctx => {

  const deferred = Q.defer();

  let data = {
    data: "",
    errCode: 500,
    msg: ''
  };

  ProductInstance
    .find({
      recommend: {$gt : '0'}
    })
    .sort({"add_time":-1})
    .exec( (err, item) => {
      if(err) {
        data.msg = err
        deferred.resolve(data);
        return;
      }

      let arr1 = []
      let arr2 = []
      let arr3 = []
      item.map(i => {
        if (i.recommend === '1') {
          arr1.push(i)
        } else if (i.recommend === '2') {
          arr2.push(i)
        } else if (i.recommend === '3') {
          arr3.push(i)
        }
      })
      let recommendItem = [arr1, arr2, arr3]
      
      data.data = recommendItem
      data.errCode = 200
      deferred.resolve(data);
    } )

    ctx.body = await deferred.promise;
}

module.exports = GetProduct