
const Products = require('../model/Products')
module.exports = async (req, res) => {
    const productItems = await Products.find();
    console.log(productItems)
    res.send(productItems)
}