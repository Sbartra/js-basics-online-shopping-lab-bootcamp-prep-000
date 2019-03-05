var cart = []

function getCart() {
 return cart;
}


function setCart(c) {
  cart = c
}

function addToCart(item) {
  var itemAndPrice = {};
  var price = Math.floor(Math.random() * 10);
  itemAndPrice[item] = price;
  cart.push(itemAndPrice);

  return cart;
}

function viewCart() {
  var inCart = [];
  var socksCost = 0;
  var puppyCost = 0;
  var iPhoneCost = 0;
  
  for(var i = 0; i < getCart().length; i++){
      for(var x in getCart()[i]){
        if(x === 'socks'){
          socksCost = getCart()[i][x];
        } else if(x === 'puppy'){
          puppyCost = getCart()[i][x];
        } else if (x === 'iPhone'){
          iPhoneCost = getCart()[i][x];
        }
      }
}
inCart.push(socksCost, puppyCost, iPhoneCost);
  console.log(`In your cart, you have socks at $${socksCost}, puppy at $${puppyCost}, iPhone at $${iPhoneCost}`);
}
viewCart();
function total() {

  const socksCost = getCart()[0]["socks"];
    const puppyCost = getCart()[1]["puppy"];
    const iPhoneCost = getCart()[2]["iPhone"];

    var totalCost = 0;
    
    for(var i = 0; i < getCart().length; i++){
      for(var cost in getCart()[i]){
        totalCost += getCart()[i][cost];
      }
    }
    return totalCost;
}

function removeFromCart(item) {
  for(var i = 0; i < getCart().length; i++){
    for(var x in getCart()[i]){
      if(getCart()[i].hasOwnProperty(item)){
        delete getCart()[i];
      }
    }
  }
  return getCart();
}

function placeOrder(cardNumber) {
  if(cardNumber.length === 0){
    return 'We don\'t have a credit card on file for you to place your order.';
  } else {
    return `Your total cost is $${total()}, which will be charged to your credit card ${cardNumber}`;
  }
}