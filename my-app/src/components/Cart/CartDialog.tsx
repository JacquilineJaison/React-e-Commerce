/* eslint-disable no-restricted-globals */
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import ListItemText from "@mui/material/ListItemText";

// TODO CREATE A Modal using portal from scartch in another branch

type CartDialogProps = {
  onShut: () => void;
  display: boolean;
};

const CartDialog = ({ onShut, display }: CartDialogProps) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "milk", amount: 2, price: 14 }].map((item) => (
        <ListItem disableGutters key={item.id}>
            <ListItemButton >
            <ListItemText primary={item.name + ' ' + item.price + '*' + item.amount}/>              
            </ListItemButton>
          </ListItem>
      ))}
    </ul>
  );

  return (
    <Dialog onClose={onShut} open={display}>
      <DialogTitle>Cart Items</DialogTitle>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {cartItems}
      </List>
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Dialog>
  );
};

export default CartDialog;
