/* eslint-disable no-restricted-globals */
import { useContext } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import CartContext from "../../store/CartContext";

type CartDialogProps = {
  onShut: () => void;
  display: boolean;
};

export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

const CartDialog = ({ onShut, display }: CartDialogProps) => {
  const cartCtx = useContext(CartContext);
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "milk", quantity: 2, price: 14}].map((item) => (
        <ListItem key={item.id}>
          <ListItemButton>
            <ListItemText
              primary={item.name + " " + item.price + "*" + item.quantity}
            />
          </ListItemButton>
          <ListItemButton onClick={()=>{}}>
            <ListItemText
              primary="Add"
            />
          </ListItemButton>
          <ListItemButton onClick={()=>{}}>
            <ListItemText
              primary="Remove"
            />
          </ListItemButton>
        </ListItem>
      ))}
    </ul>
  );

  return (
    <Dialog open={display}>
      <DialogTitle>Cart Items</DialogTitle>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {cartItems}
      </List>
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div>
        <button onClick={()=>{onShut()}}>Close</button>
        <button onClick={()=>{}}>Order</button>
      </div>
    </Dialog>
  );
};

export default CartDialog;
