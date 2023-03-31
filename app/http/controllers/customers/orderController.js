const Order = require('../../../models/order')
// const nmenu = require('../../models/nonvegmenu')
// const nmenu = require('../../../models/nonvegmenu')
const moment = require('moment');
const Nonvegmenu = require('../../../models/nonvegmenu');
const Vegmenu = require('../../../models/vegmenues');
const Drinkmenu = require('../../../models/drinkmenu');
const Sweetmenu = require('../../../models/sweetmenu');
const Icemenu = require('../../../models/icemenu');
const Pizzamenu = require('../../../models/pizzamenu');
function orderController() {
    return {
        store(req, res) {
            console.log(req.body);
            //validate
            const{phone,address} = req.body
            if(!phone || !address){
                req.flash('error',"All feilds are required")
                return res.redirect('/cart')
            }

            const order = new Order({
                customerId:req.user._id,
                items:req.session.cart.items,
                phone:phone,
                address:address

            })
            
            order.save().then(result =>{
                req.flash('success','Order Placed successfully')
                delete req.session.cart
                return res.redirect('/customer/orders')
            }).catch(err =>{
                req.flash('error',"Item added successfully")
                res.redirect('/cart')
            })
           
        },
        display(req,res){
            res.render('savedata')
        },
        postorder(req,res){
            const { name,price,image,decs} = req.body
            console.log(req.body)
            const nonvegmenu = new Nonvegmenu({
                name: name,
                image:image,
                price:price,
                desc:decs,
                // password:hashedPassword,

            })
         
            nonvegmenu.save().then((nonvegmenu)=>{
                //Login


                return res.redirect('/')
            }).catch(err => {
                req.flash('error','Something went wrong')
               
                return res.redirect('/postorder')
            })
        },
        vpostorder(req,res){
            const { name,price,image,decs} = req.body
            console.log(req.body)
            const vegmenu = new Vegmenu({
                name: name,
                image:image,
                price:price,
                desc:decs,
                // password:hashedPassword,

            })
         
            vegmenu.save().then((vegmenu)=>{
                //Login


                return res.redirect('/')
            }).catch(err => {
                req.flash('error','Something went wrong')
               
                return res.redirect('/postorder')
            })
        },
        dpostorder(req,res){
            const { name,price,image,decs} = req.body
            console.log(req.body)
            const drinkmenu = new Drinkmenu({
                name: name,
                image:image,
                price:price,
                desc:decs,
                // password:hashedPassword,

            })
         
            drinkmenu.save().then((drinkmenu)=>{
                //Login


                return res.redirect('/')
            }).catch(err => {
                req.flash('error','Something went wrong')
               
                return res.redirect('/postorder')
            })
        },


        spostorder(req,res){
            const { name,price,image,decs} = req.body
            console.log(req.body)
            const sweetmenu = new Sweetmenu({
                name: name,
                image:image,
                price:price,
                desc:decs,
                // password:hashedPassword,

            })
         
            sweetmenu.save().then((sweetmenu)=>{
                //Login


                return res.redirect('/')
            }).catch(err => {
                req.flash('error','Something went wrong')
               
                return res.redirect('/postorder')
            })
        },
        ipostorder(req,res){
            const { name,price,image,decs} = req.body
            console.log(req.body)
            const icemenu = new Icemenu({
                name: name,
                image:image,
                price:price,
                desc:decs,
                // password:hashedPassword,

            })
         
            icemenu.save().then((icemenu)=>{
                //Login


                return res.redirect('/')
            }).catch(err => {
                req.flash('error','Something went wrong')
               
                return res.redirect('/postorder')
            })
        },
        ppostorder(req,res){
            const { name,price,image,decs} = req.body
            console.log(req.body)
            const pizzamenu = new Pizzamenu({
                name: name,
                image:image,
                price:price,
                desc:decs,
                // password:hashedPassword,

            })
         
            pizzamenu.save().then((pizzamenu)=>{
                //Login


                return res.redirect('/')
            }).catch(err => {
                req.flash('error','Something went wrong')
               
                return res.redirect('/postorder')
            })
        },
        async index(req,res){
            const orders = await Order.find({customerId: req.user._id},null,{sort:{'createdAt':-1}})
            console.log(orders);
            res.render('customer/order',{orders:orders, moment:moment})
            // console.log(req.user);
        }
    }
}

module.exports = orderController


 //     name: Fname,
            //     username:Uname,
            //     email:email,
            //     phonenumber:Pnum,
            //     password:hashedPassword,