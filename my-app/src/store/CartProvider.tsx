import { useReducer, PropsWithChildren } from "react";
import CartContext from "./CartContext";
import { CartItem } from "../components/Cart/CartDialog";
import { JsxElement } from "typescript";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

type Action = { type: "ADD"; item: CartItem } | { type: "REMOVE"; id: number };

const cartReducer = (state: CartState, action: Action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item: CartItem) => item.id === action.item.id
    );
    const existingCartItem: CartItem = state.items[existingCartItemIndex];
    let updatedItems: CartItem[];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
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
  if (action.type === "REMOVE") {
    const existingCartItemIndex: number = state.items.findIndex(
      (item: CartItem) => item.id === action.id
    );
    const existingItem: CartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems: CartItem[];
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(
        (item: CartItem) => item.id !== action.id
      );
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};
interface Props {}
const CartProvider = (props: PropsWithChildren) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: CartItem) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id: number) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
