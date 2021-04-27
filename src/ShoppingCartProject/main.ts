import { ShoppingCart } from './shopping-cart';
import { calculateTotalAmount } from './calculate-total-amount';


const cart = new ShoppingCart();
console.log(`The cart's total is ${calculateTotalAmount(cart)}`);   // 108

// order to calcuate the total
const order = new Order();
console.log(`The cart's total is ${calculateTotalAmount(cart)}`);    // 108
