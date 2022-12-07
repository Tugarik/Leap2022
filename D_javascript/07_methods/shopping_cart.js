const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);

if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);

if (shoppingCart.includes("Honey")) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}
console.log(shoppingCart);

if (shoppingCart.includes("Tea")) {
  shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea");
}
console.log(shoppingCart);
