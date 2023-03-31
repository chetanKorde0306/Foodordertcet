const Contact = require("../../../models/contact")

function contactController() {
    return{
        index(req,res){
        
            res.render('contact')
        },
        postcontact(req,res){
            const { Fname,email,message} = req.body
            //validate req
            console.log(req.body)
            if(!Fname || !email || !message ){
                req.flash('error','All Feilds are required')
                req.flash('Fname',Fname)
                
                req.flash('email',email)
                req.flash('message',message)
                return res.redirect('/contact')
            }
    
            const user = new Contact({
                name: Fname,
                email:email,
                message:message,
                // password:hashedPassword,

            })
            user.save().then((user)=>{
                //Login


                return res.redirect('/')
            }).catch(err => {
                req.flash('error','Something went wrong')
               
                return res.redirect('/contact')
            })
        

            
       
        }
    }
}
module.exports = contactController