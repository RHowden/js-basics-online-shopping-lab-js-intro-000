var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newObject = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100)
 }
 cart.push(newObject)

 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length > 0) {
    var result = 'In your cart, you have '
    for (var i = 0; i < cart.length - 1; i++) {
      result += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }

    result += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    return result
  }
  else {
    return 'Your shopping cart is empty.'
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
