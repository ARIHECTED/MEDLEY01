// Cart
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')
//Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
//Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};


//Cart Working 
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

//Making Function
function ready(){
    //Remove Item from cart
    var removeCartButtons = document.getElementsByClassName('close-remove')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener("click", removeCartItem)
    }
}

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
}