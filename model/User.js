const mongoose = require ('mongoose')
const bcrypt = require ('bcrypt')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type : String, 
        required: true},

    username: { 
        type : String,
        required: true},

    password: { 
        type : String,
        required: true},

});
//redirect the model to encrypt the passw before saving details. Import Bcrypt libruary and add the below lines.

userSchema.pre('save', function (next) {
    const user = this;
    const salt = 5; // the higher the salt value, the safer the password. It will take longer to process
    bcrypt.hash(user.password, salt , function (error, hash) {
        console.log(hash)       
        console.error(error)
        user.password = hash
        next()
    })
})

const User = mongoose.model('User', userSchema, 'user');
module.exports = User;