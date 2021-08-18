interface CartItem {
    id: number;
    product: string;
    price: number;
    quantity: number;
}

let cart: CartItem [] = [
    {

    id: 1,
    product: "Water Bottle",
    price: 20,
    quantity:1
},
    {

    id: 2,
    product: "Headphones",
    price: 100,
    quantity:1
},
    {

    id: 3,
    product: "Candle",
    price: 20,
    quantity:1
},
    {

    id: 4,
    product: "Chips",
    price: 2,
    quantity:1
},

]

export default cart;

export {CartItem};