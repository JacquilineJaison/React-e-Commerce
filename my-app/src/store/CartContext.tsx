import { createContext } from 'react';
import { CartItem } from '../components/Cart/CartDialog';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item:CartItem) => {},
  removeItem: (id:number) => {}
});

export default CartContext;