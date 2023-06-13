import { createContext } from "react";
import { CartItem } from "../components/Cart/CartDialog";

type cartContext = {
  items: CartItem[];
  totalAmount: number;
  addItem: null | ((item: CartItem) => void);
  removeItem: null | ((id: number) => void);
};

const CartContext = createContext<cartContext>({
  items: [],
  totalAmount: 0,
  addItem: null,
  removeItem: null
});

export default CartContext;
