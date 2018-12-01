import { GetterTree, Getter } from "vuex";
// import { State, CartProduct } from './index'
import { State } from "./index";

// const cartProducts: Getter<State, any> = (state: State) => {
//   return state.cart.added.map((shape) => {
//     const product = state.products.all.find((p) => p.id === shape.id)
//     if (product) {
//       const cartProduct: CartProduct = {
//         title: product.title,
//         price: product.price,
//         quantity: shape.quantity,
//       }
//       return cartProduct
//     }
//   })
// }
const getterClient1: Getter<State, any> = (state: State) => {
  console.log(state);
  // console.log(state.index);
};

const getterTree: GetterTree<State, any> = {
  // cartProducts,
  getterClient1
};

export default getterTree;
