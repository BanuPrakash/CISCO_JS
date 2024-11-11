const { random } = require('lodash'); //import random from 'lodash';
const { add, filter } = require('./lib.js');
console.log(add(1, 2)); // 3
console.log(random(100));

let nos = [5, 1, 3, 4, 2, 10, 13];

let products = [
    { "id": `1`, "name": `iPhone`, "price": `90000`, category: 'mobile' },
    { "id": `2`, "name": `Sony Bravia`, "price": `290000`, category: 'tv' },
    { "id": `3`, "name": `Logitech `, "price": `5000`, category: 'computer' },
    { "id": `4`, "name": `Samsung Fold`, "price": `210000`, category: 'mobile' },
    { "id": `5`, "name": `LG OLED`, "price": `210000`, category: 'tv' },
    { "id": `6`, "name": `Wacom`, "price": `4500`, category: 'computer' },

]

//  let evens = filter(nos, function(n) {
//     return n % 2 === 0;
//  });

// using arrow function
let evens = filter(nos, n => n % 2 === 0);

evens.forEach(function (n) {
    console.log(n);
});

//  let mobiles = filter(products, function(product) {
//     return product.category === 'mobile';
//  });

let mobiles = filter(products, product => product.category === 'mobile');

// HOF
mobiles.forEach(function (product) {
    console.log(product.name);
});