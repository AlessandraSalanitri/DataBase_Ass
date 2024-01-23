const Products = require('../model/Products')
const path = require ('path')
module.exports = async (req, res) => {
    // console.log(req.params.id)
    const result = await Products.findById(req.params.id)
    console.log(req.body);
    console.log(req.files);

    if(!req.files) {
        //keep same img but update the rest
    console.log("You did not upload any picture")
    await Products.updateOne({_id: req.body._id},{
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    })

    } else {
        let myfile = req.files.myfile;
       
        myfile.mv(path.resolve(__dirname, '../Public/images', myfile.name))
    
        await Products.updateOne({_id: req.body._id},{
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            path:'/images'/ +myfile.name
    })
     res.redirect('/chocolate')
    }
}