// const age = [10, 15, 43, 2];
//
// let sum = 0;
//
// for (let i = 0; i < age.length; i++) {
//     sum = sum + age[i];
// }
//
// console.log(sum);



const cart = [{name:'Book1',price: 1},{name:'Book2',price: 5},{name:'Book3',price: 99},{name:'Book4',price: 0.99}];

let sum = 0;

for (let i = 0; i < cart.length; i++) {

    sum = sum + cart[i].price;

    console.log("Вы добавили книгу", cart[i].name, "Цена:", cart[i].price, );

}

console.log("Общая стоимость", sum);
