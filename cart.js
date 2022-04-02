'use strict';
//Создайте объект cart — корзина:
//var button = document.querySelector('button');
//const product = prompt('Наименование товара');
//button.onclick = function() {
  //const product = prompt('Наименование товара');
//console.log('\"' + product + '\"');
  const cart = {
  tovar: "Кукла",
  cena: 400,
};

console.log('cart: ', cart)
//alert(cart);

cart.tovar="Машинка";
cart.cena=950;

console.log('cart: ', cart)
//alert(cart);

let user = {};
console.log('useruser: ', user);
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
console.log('useruser: ', user)

const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};
