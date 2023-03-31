require('dotenv').config()
const express = require('express');
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 8080
const mongoose =require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const MongoDbStore = require('connect-mongo')
const passport  = require('passport')
// var bodyParser = require( 'body-parser' );
//database connection 
// const url = 'mongodb://localhost/pizaaa';
const url = 'mongodb://localhost:27017/homemenu'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
});
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
    console.log('Db connected...');
});


// session config(it act as a middleware)
app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave:false,
    store:MongoDbStore.create({
        mongoUrl: url
    }),
    saveUninitialized:false,
    cookie:{maxAge: 1000*60*60*24}//24hrs

}))

//Passport config
const passportInit = require('./app/config/passport')
passportInit(passport)

app.use(passport.initialize())
app.use(passport.session())
// app.use( bodyParser.urlencoded({ extended: true }) );
app.use(flash())



//Assets
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))//express does not know which type of data he gets so we define it  
app.use(express.json())
//global middleware
app.use((req,res,next)=>{
    res.locals.session = req.session
    res.locals.user = req.user
    next()
})
//set Template engine
app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))//locationn of our html file 
app.set('view engine','ejs')

require('./routes/web')(app)






app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
} );