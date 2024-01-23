const User = require ('../model/User')
const path = require('path')
module.exports = async (req, res) => {
    
    User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })

    res.redirect('/Login')
}
