import { useContext } from "react";
import CartContext from "./CartContext";

const CartProvider = (props)=>{
    const cartContext = useContext(CartContext);


    return (
        <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    );
}

export default CartProvider;