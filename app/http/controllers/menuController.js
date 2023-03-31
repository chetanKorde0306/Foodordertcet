const drinkmenu = require("../../models/drinkmenu");
const icemenu = require("../../models/icemenu");
const nonvegmenu = require("../../models/nonvegmenu");
const pizzamenu = require("../../models/pizzamenu");
const sweetmenu = require("../../models/sweetmenu");
const vegmenues = require("../../models/vegmenues");


function menuController() {
    return {
        async index(req,res) {
            
            const nonvegitems = await nonvegmenu.find()
            const vegitems = await vegmenues.find()
            const drinkitems = await drinkmenu.find()
            const sweetitems = await sweetmenu.find()
            const pizzaitems = await pizzamenu.find()
            const iceitems = await icemenu.find()
            res.render('menu',{nonvegitems:nonvegitems,vegitems:vegitems,drinkitems:drinkitems,sweetitems:sweetitems,pizzaitems:pizzaitems,iceitems:iceitems})
            console.log(nonvegitems);
            console.log(vegitems);
            console.log(drinkitems);
            console.log(sweetitems);
            console.log(pizzaitems);
            console.log(iceitems);
        }

    }
}

module.exports = menuController