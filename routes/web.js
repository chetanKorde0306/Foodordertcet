const homeController= require('../app/http/controllers/homeController')
const authController= require('../app/http/controllers/authController')
const cartController =require('../app/http/controllers/customers/cartController')
const contactController =require('../app/http/controllers/customers/contactController')
const menuController =require('../app/http/controllers/menuController')
const guest = require('../app/http/middleware/guest')
const orderController = require('../app/http/controllers/customers/orderController')

function initRoutes(app) {
   
    app.get('/', homeController().index)
    app.get('/cart',cartController().index)
    app.get('/login',guest,authController().login)
    app.post('/login',authController().postlogin)
    app.get('/register',guest,authController().register)
    app.post('/register',authController().postregister)
    app.get('/postorder',orderController().display)
   
    app.get('/contact',contactController().index)
    app.post('/contact',contactController().postcontact)
    app.get('/menu',menuController().index)
    app.post('/update-cart',cartController().update)
    app.post('/logout',authController().logout)

    app.post('/orders',orderController().store)
    app.get('/customer/orders',orderController().index)



    //save data routes

    app.post('/postorder',orderController().postorder)
    app.post('/vpostorder',orderController().vpostorder)
    app.post('/dpostorder',orderController().dpostorder)
    app.post('/spostorder',orderController().spostorder)
    app.post('/ppostorder',orderController().ppostorder)
    app.post('/ipostorder',orderController().ipostorder)
    // app.get('/register',(req,res)=>{
    //     res.render('auth/register')
    // })
}

module.exports = initRoutes