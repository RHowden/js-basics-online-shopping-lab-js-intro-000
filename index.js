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
    if (cart.length === 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
    else {
      var result = 'In your cart, you have '
      for (var i = 0; i < cart.length - 1; i++) {
        result += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
      result += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      return result
    }

  }
  else {
    return 'Your shopping cart is empty.'
  }
}

function total() {
  var result = 0
  for (var i = 0; i < cart.length; i++) {
    result += cart[i].itemPrice
  }

  return result
}

function removeFromCart(item) {
  var arrayItem = cart.find(e => e.itemName === item)
  var itemIndex = cart.indexOf(arrayItem)
  if (itemIndex === -1) {
    return 'That item is not in your cart.'
  }
  else {
    cart = cart.splice(itemIndex, 1)
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
