const homemenu = require("../../models/homemenu");
// const nonvegmenu = require("../../models/nonvegmenu");


function homeController() {
    return {
         async index(req,res) {
            const items = await homemenu.find()
           
            // console.log(items);
            res.render('home',{items:items})
        }
    }
}

module.exports = homeController