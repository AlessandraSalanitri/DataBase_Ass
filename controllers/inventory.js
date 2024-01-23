

const Inventory = require('../model/Inventory')
module.exports = async (req, res) => {
    const inventoryProduct = await Inventory.find();
    console.log(inventoryProduct)
    res.send(inventoryProduct)
}
