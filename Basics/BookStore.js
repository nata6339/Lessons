const cart = [];
const books = [
    {id: 1, name: "Война и мир", price: 59.99},
    {id: 2, name: "Гари Потный и загробный камнеь", price: 99.99},
    {id: 3, name: "Лёлик и болик", price: 159.99},
    {id: 4, name: "JS для чайинка", price: 0.99},
];
let count = 0;
addToCart(1);
addToCart(4);
addToCart(3);
removeFromCart(4);
console.log(cart);

checkout();

//----------------------------------------------------------------

function addToCart(bookId) {
    for (let i = 0; i < books.length; i++) {
        count++;
        if (bookId == books[i].id) {
            cart.push(books[i]);
            break;
        }
    }
    //Implement
    // 1. find book by id
    // 2. Add to cart
    // * Use destructuring

}


function checkout() {
    //TODO: print cart total price;
    //TODO: print each element name and price

    let sum = 0
    for (i = 0; i < cart.length; i++) {
        sum = sum + cart[i].price;
        console.log("Added book:", cart[i].name, "Price:", cart[i].price, );
    }
    console.log('Total price:', Number.parseFloat(sum).toPrecision(5));
}

function removeFromCart(bookId) {
   let newCart = cart.splice(2, 1)
    console.log(cart)
    //TODO: remove book from car with given id
}






