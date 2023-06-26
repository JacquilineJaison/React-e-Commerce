import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import TextField from "@mui/material/TextField";
import CartContext from "../../store/CartContext";
import { useContext, useRef } from "react";

type Grocery = {
  id: number;
  name: string;
  price: number;
};
const DUMMY_GROCERIES = [
  {
    id: 1,
    name: "milk",
    price: 7,
  },
  {
    id: 2,
    name: "butter",
    price: 4,
  },
  {
    id: 3,
    name: "bread",
    price: 5,
  },
  {
    id: 4,
    name: "eggs",
    price: 6,
  },
];

const InStockGrocery = () => {
  const cartCtx = useContext(CartContext);
  const quantityRef = useRef<HTMLInputElement>(null);

  const addToCart = (grocery: Grocery) => {
    console.log(cartCtx, "value");
    console.log(grocery, "grocery");
    cartCtx!.addItem({
      id: grocery.id,
      name:grocery.name,
      quantity: Number(quantityRef.current?.value),
      price:grocery.price
    });
    
  };

  const groceryList = DUMMY_GROCERIES.map((grocery) => {
    return (
      <>
        <ListItem disablePadding key={grocery.id}>
          <ListItemButton>
            <ListItemText primary={grocery.name} secondary={grocery.price} />
            <form>
              <TextField
                inputRef={quantityRef}
                id="outlined-basic"
                label="Quantity"
                variant="outlined"
              />
              <Button variant="contained" onClick={() => addToCart(grocery)}>
                Add
              </Button>
            </form>
          </ListItemButton>
        </ListItem>
        <Divider component="li" />
      </>
    );
  });

  return (
    <section>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {groceryList}
      </List>
    </section>
  );
};

export default InStockGrocery;
