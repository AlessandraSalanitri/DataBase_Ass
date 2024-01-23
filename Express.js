
const express = require('express'); //Server library to make it easy to make a server
const app = express(); //App is the object of Express uses to listen for requests on a port number
const path = require('path');
app.use(express.static('Public')); //Links all static resources such as img, style, css files
app.set('view engine', 'ejs'); //Tells express which engine to use to render your pages

app.use(express.urlencoded({ extend: true }));
app.use(express.json());   //Nodejs will store data in json format.

//express session
//encryption password
const session = require('express-session')
app.use(session({
    secret: "keyboard User",
    resave: false,
    saveUninitialized: true
}))

const fileUpload = require('express-fileupload')
app.use(fileUpload())

//mongoose import after installation
const mongoose = require('mongoose')

//connection to mongodb
//replace localhost with 127.0.0.1 if does not work 
mongoose.connect('mongodb://127.0.0.1/choco_store').then(() => {
    console.log('Connection Successful')
});

const bodyParser =require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

    
//this line import the inventory 
const Inventory = require('./model/Inventory')
const Products = require('./model/Products')




// //middleware : a function that will run in every request
// const testMiddleware = (req, res, next) => {
//     console.log("We are taking you to the desired page")

//     next() // without next, the function will hang here. Next mean that the middleware has finished and the next function can be executed.
// }
// app.use(testMiddleware)


//const validationMiddleware = (req, res, next) => {
//    ///check no field is null
//    if (req.body.name == null || req.body.price == null || req.file == null || req.body.description == null) {
//        console.log("Sorry, all fields needs to be filled. ")
//        return res.redirect('/newChocoForm')
//    }
//    next()
//}
//app.use('/newChocoForm', validationMiddleware)



//create another middleware with contact page -- validate password, encoding // mongoose middleware? look up

// global variable..any global variable is accessible from any file.even from ejs files
global.loggedIn= null;

app.use('*', (req, res, next) => {
    loggedIn = req.session.userId;
    //console.log(loggedIn)
    next()
})

const homeController = require('./controllers/home')
app.get('/', homeController)
//app.get('/', function (req, res) {
//    console.log(`Received request method = ${req.method}, and URL = ${req.url}`)
//    res.render('index')

//})

const aboutController = require('./controllers/about')
app.get('/about', aboutController)
//app.get('/about', function (req, res) {
//    res.render('about')
//})

const chocolateController = require('./controllers/chocolate')
app.get('/chocolate', chocolateController)
//app.get('/chocolate', function (req, res) {
//    res.render('chocolate')
//})

const contactController = require('./controllers/contact')
app.get('/contact', contactController)
//app.get('/contact', function (req, res) {
    //res.send("This is Our Contact Page!")
    //res.sendFile(path.resolve(__dirname, '/contact.html'))
//    res.render('contact')
//})

// const getProductController = require('./controllers/getProduct')
// app.get('/getProduct', getProductController) 
//app.get('/getProducts', async (req, res) => {
    //const productItems = await Products.find();
    //console.log(productItems)
    //res.send(productItems)
//})

const inventoryController = require('./controllers/inventory');
app.get('/inventory', inventoryController) 
// app.get('/inventory', async (req, res) => {
//    const inventoryProduct = await Inventory.find();
//    console.log(inventoryProduct)
//    res.render(inventoryProduct)
// })

const newChocoController = require('./controllers/newChoco');
app.post('/newChoco', newChocoController)

const newChocoFormController = require('./controllers/newChocoForm');
app.get('/newChocoForm', newChocoFormController)

const deteleProductController = require('./controllers/deleteProduct')
app.get('/productItem/delete/:id', deteleProductController) 

const updateProductFormController = require('./controllers/updateProductForm')
app.post('/updateProductForm/:id', updateProductFormController) 

const userSignupController = require('./controllers/userSignup')
app.get('/userSignup', userSignupController)

const registerUserController = require('./controllers/registerUser')
app.post('/registerUser' , registerUserController)

const loginUserController = require('./controllers/loginUser')
app.post('/loginUser' , loginUserController)

const loginController = require('./controllers/login')
app.get('/login', loginController)

const logoutUserController = require('./controllers/logoutUser')
app.get('/logoutUser' , logoutUserController)

const errorController = require('./controllers/error');
const { runInNewContext } = require('vm');
app.get('*', errorController) 
//app.get('*', (req, res) => {
//    res.send("Error")
//})

const port = 3000;
const hostname = '127.0.0.1';

/*app.get('/addCollection', async (req, res) => {
    const itemCollection = [
        { name: 'YUMMY White Chocolate', price: 5, path: "" },
        { name: 'YUMMY Dark Chocolate', price: 6, path: "" },
        { name: 'YUMMY Nutty Chocolate', price: 7, path: "" },
        { name: 'YUMMY Truffle Chocolate', price: 8, path: "" },
    ]
})

    app.get('/getCollection', async (req, res) => {
        const itemCollection = await Collection.find();
        console.log(itemCollection)
        res.render(itemCollection)
    })

    //app.get('/addData', async(req,res) =>{
    //   const products = [
    //        {name: 'Watch', prince: 50, path: ''},
    //       {name: 'White Chocolate', prince: 7.99, path: ''},
    //       {name: 'Dark Chocolate', prince: 5.99, path: ''}
    //   ]

    //   const newProducts = new Products(productItems)
    //   await newProducts.save();
    ///   res.send('Successfully added')
    //})
*/

    app.listen(port, () => {
        console.log(`Server ${hostname} is running on port number ${port}`);
        console.log(`Server Url = https://${hostname}:${port}`);
    });





    