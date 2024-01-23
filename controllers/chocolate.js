
const Products = require('../model/Products')
module.exports = async (req, res) => {
   // console.log("I am in chocolate controller")
    const productItems = await Products.find({});
    //console.log(productItems)
    res.render('chocolate' , {productItems: productItems})
}