const Products = require ('../model/Products')
const path = require('path')
module.exports = async (req, res) => {

    console.log(req.body)
   // console.log(req.files)
    let myfile = req.files.myfile;
    console.log(myfile.name)
    // to find the extension   =   console.log(path.extname(myfile.name))
    myfile.mv(path.resolve(__dirname, '../Public/images', myfile.name))

    Products.create({
        name: req.body.name,
        price: req.body.price,
        deescription: req.body.description,
        path: '/images/'+myfile.name
    })

    //await newChoco.save();
    //res.send('New Chocolate Successfully Added')
    res.redirect('/chocolate')
}









