"use strict";
//alert(user.item);
//console.log('34434', user)
const arr1 = [];
const arr2 = [];
const input1=prompt('Tovar')
const input2=prompt('Cena')
arr1.push(input1)
arr2.push(input2)

console.log('1  ', arr1)
console.log('2  ', arr2)

const user = {
  item: {
    tovar: arr1,
    cena: arr2,
  },
  totalPrice: 0,
  count: 0,
};

console.log('555 ', user.item.tovar)