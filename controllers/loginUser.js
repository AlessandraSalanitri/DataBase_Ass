const User = require ('../model/User')
const path = require('path')
const bcrypt = require ('bcrypt')

module.exports = async (req, res) => {

    const {username, password} = req.body
    const user = await User.findOne({username: req.body.username});
    
    if (user) {
        ///if user exist compare the user pass with database encrypted password
        const encryptedPassword = user.password;
        const unencryptedPassword = req.body.password;
       // console.log("Valid Username")
        bcrypt.compare(unencryptedPassword, encryptedPassword, (error, same) => {
            if(same) {

                console.log('User Successfully logged in!')
                req.session.userId = user._id;
                req.session.UserEmail = user.email;
                console.log(req.session)
                res.redirect("/")

            } else {
                console.log('Password incorrect')
                res.render("Login", {
                    invalidUserError: null,
                    invalidUserPassword: "Wrong Password!"
                })           
            }
        } )

    } else {
        ///if the user doesn't exist and we need to send some msgs to let him know
        console.log("The username and password does not exist. Please register or retape your details")
        res.render("Login", {
            invalidUserError: "Invalid Username",
            invalidUserPassword: null
        })

    }

    
    ///res.redirect('/')
}
