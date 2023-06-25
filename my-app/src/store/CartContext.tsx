import { createContext } from "react";
import { CartItem } from "../components/Cart/CartDialog";

type cartContext = {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
};

const CartContext = createContext<cartContext|null>(null);

export default CartContext;
