// var Swiper = require('swiper')
import axios from 'axios'
import Noty from 'noty'
let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
};
// script for crousel 
var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function updateCart(item){
    axios.post('update-cart',item).then(res =>{
        console.log(res);
        cartCounter.innerText = res.data.totalQty
        new Noty({
            type:'success',
            timeout:1000,
            progressBar:false,
            
            text:'Item added to cart '
        }).show();
    }).catch(err=>{
        new Noty({
            type:'error',
            timeout:1000,
            progressBar:false,
            
            text:'Item added to cart'
        }).show();
    })
}

let addToCart = document.querySelectorAll('.add-to-cart')
addToCart.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
      let item = JSON.parse(btn.dataset.item);
      updateCart(item);
      console.log(item);
      let nonvegitem = JSON.parse(btn.dataset.nonvegitem);
      updateCart(nonvegitem);
      console.log(nonvegitem);
      let vegitem = JSON.parse(btn.dataset.vegitem);
      updateCart(vegitem);
      console.log(vegitem);
      let drinkitem = JSON.parse(btn.dataset.drinkitem);
      updateCart(drinkitem);
      console.log(drinkitem);
      let pizzaitem = JSON.parse(btn.dataset.pizzaitem);
      updateCart(pizzaitem);
      console.log(pizzaitem);
      let iceitem = JSON.parse(btn.dataset.pizzaitem);
      updateCart(iceitem);
      console.log(iceitem);
    })
})

const alertMsg = document.querySelector('#success-alert')
if(alertMsg){
    setTimeout(()=>{
        alertMsg.remove()
    },2000)
}