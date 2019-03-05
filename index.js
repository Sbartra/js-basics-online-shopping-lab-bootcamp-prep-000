var cart = [];

function setCart(newCart) {
cart = newCart;
}
function getCart() {
return cart;
}
function addToCart(item) {
var price = Math.floor(Math.random() * 10);
cart.push({item: price});
console.log(item + " has been added to your cart.");
return cart;
}

function viewCart() {
if (cart.length != 0) {
var newArray = [];
for (var i = 0, l = cart.length; i < l; i++) {

var ItemPriceObj = cart[i];
var item = Object.keys(ItemPriceObj);
var price = ItemPriceObj['item'];
newArray.push(` ${item} at \$${price}`)

}
console.log(`In your cart, you have ${newArray}.`);
}
else {
return console.log('Your shopping cart is empty.');
}
}
