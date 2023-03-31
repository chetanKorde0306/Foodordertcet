const User = require('../../models/user')
const bcrypt = require('bcrypt')
const passport = require('passport')
function authController() {
    return {
        login(req,res) {
            res.render('auth/login')
        },
        register(req,res) {
            res.render('auth/register')
        },
        postlogin(req,res,next){
            const {email,password,cpass} =req.body
            //validate request
            if(!email || !password || !cpass ) {
                req.flash('error', 'All fields are required')
                return res.redirect('/login')
            }
            if(cpass != password){
                req.flash('error', 'Password Missmatched')
                return res.redirect('/login')
            }
            console.log(req.body)
            // passport.authenticate('local',(err,user,info)=>{
            //     if(err){
            //         req.flash('error',info.message)
            //         return next(err)
            //     }
               
            //     if(!user){
            //         req.flash('error',info.message)
            //         return res.redirect('/login')
            //     }
            //     req.logIn(user,()=>{
            //         if(err){
            //             req.flash('error',info.message)
            //             return next(err)
            //         }
            //        return res.redirect('/') 
            //     })
            // })(req,res,next)
            // passport.authenticate('local', (err, user, info) => {
            //     if(err) {
            //         req.flash('error', info.message )
            //         return next(err)
            //     }
            //     if(!user) {
            //         req.flash('error', info.message )
            //         return res.redirect('/login')
            //     }
            //     req.logIn(user, (err) => {
            //         if(err) {
            //             req.flash('error', info.message ) 
            //             return next(err)
            //         }

            //         return res.redirect('/')
            //     })
            // })(req, res, next)/
            passport.authenticate('local', (err, user, info) => {
                if(err) {
                    req.flash('error', info.message )
                    return next(err)
                }
                if(!user) {
                    req.flash('error', info.message )
                    return res.redirect('/login')
                }
                req.logIn(user, (err) => {
                    if(err) {
                        req.flash('error', info.message ) 
                        return next(err)
                    }

                    return res.redirect('/')
                })
            })(req, res, next)

        },
        async postregister(req,res){
            const { Fname,Uname,email,pass,cpass,Pnum} = req.body
            //validate req
            if(!Fname || !Uname || !email || !pass || !cpass || !Pnum){
                req.flash('error','All Feilds are required')
                req.flash('Fname',Fname)
                req.flash('Uname',Uname)
                req.flash('email',email)
                req.flash('Pnum',Pnum)
                return res.redirect('/register')
            }

            //Check if email exits
            User.exists({email:email},(err,result)=>{
                if(result){
                    req.flash('error','Email already taken')
                    req.flash('Fname',Fname)
                    req.flash('Uname',Uname)
                    req.flash('email',email)
                    req.flash('Pnum',Pnum)
                    return res.redirect('/register')
                }
            })
            //Check for password
            if(cpass != pass){
                req.flash('error','Password not Matched')
                req.flash('Fname',Fname)
                req.flash('Uname',Uname)
                req.flash('email',email)
                req.flash('Pnum',Pnum)
                return res.redirect('/register')
            }
            //hash password
            const hashedPassword = await bcrypt.hash(pass,10)
            // create a user
            const user = new User({
                name: Fname,
                username:Uname,
                email:email,
                phonenumber:Pnum,
                password:hashedPassword,

            })
            user.save().then((user)=>{
                //Login


                return res.redirect('/')
            }).catch(err => {
                req.flash('error','Something went wrong')
               
                return res.redirect('/register')
            })

            console.log(req.body);
        },
        logout(req,res){
            req.logout()
            return res.redirect('/login')
        }


    }
}

module.exports = authController