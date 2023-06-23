import { useReducer, PropsWithChildren } from "react";
import CartContext from "./CartContext";
import { CartItem } from "../components/Cart/CartDialog";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

type Action = { type: "ADD"; item: CartItem } | { type: "REMOVE"; id: number };

const cartReducer = (state: CartState, action: Action) => {
  switch (action.type) {
    case "ADD": {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.quantity;

      const existingCartItemIndex = state.items.findIndex(
        (item: CartItem) => item.id === action.item.id
      );
      const existingCartItem: CartItem = state.items[existingCartItemIndex];
      let updatedItems: CartItem[];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.item.quantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, action.item];
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case "REMOVE": {
      const existingCartItemIndex: number = state.items.findIndex(
        (item: CartItem) => item.id === action.id
      );
      const existingItem: CartItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems: CartItem[];
      if (existingItem.quantity === 1) {
        updatedItems = state.items.filter(
          (item: CartItem) => item.id !== action.id
        );
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.quantity - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
  }
};

const CartProvider = (props: PropsWithChildren) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemHandler = (item: CartItem) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id: number) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
