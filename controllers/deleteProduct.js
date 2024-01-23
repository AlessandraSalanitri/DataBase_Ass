const Products = require('../model/Products')
module.exports = async (req, res) => {

    console.log(req.params.id)
    await Products.deleteOne({_id: req.params.id})
    res.redirect('/chocolate')
}