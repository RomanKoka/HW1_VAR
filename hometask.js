//====== Task1 ======
let quantity = prompt('Введіть кількість купленого товару');
let price = prompt('Введіть ціну товару');
console.log('Вартість вашої покупки становить: ' ,quantity * price, 'UAH');

// ====== Task2 ======
 let totalPrice = prompt('Ввртість вашої покупки?');
 console.log('Вартість вашої покупки зі знижкою становить: ' ,totalPrice - totalPrice * 0.1, 'UAH' )

//  ====== Task3 ======
let firstnumber = Number(prompt('Введіть число 1:'));
let secondnumber = Number(prompt('Введіть число 2:'));
let thirdnumber = Number(prompt('Введіть число 3:'));
let forthnumber = Number(prompt('Введіть число 4:'));
let middleValue = (firstnumber + secondnumber + thirdnumber + forthnumber) / 4;

console.log('Середнє арифметичне значення введених вами чисел становить: ',middleValue);