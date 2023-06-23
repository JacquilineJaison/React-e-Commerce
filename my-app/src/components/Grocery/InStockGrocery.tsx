import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import TextField from "@mui/material/TextField";

const DUMMY_GROCERIES = [
  {
    id: "g1",
    name: "milk",
    price: 7,
  },
  {
    id: "g2",
    name: "butter",
    price: 4,
  },
  {
    id: "g3",
    name: "bread",
    price: 5,
  },
  {
    id: "g4",
    name: "eggs",
    price: 6,
  },
];

const InStockGrocery = () => {
  const groceryList = DUMMY_GROCERIES.map((grocery) => {
    return (
      <>
        <ListItem disablePadding key={grocery.id}>
          <ListItemButton>
            <ListItemText primary={grocery.name} secondary={grocery.price} />            
            <form>
              <TextField
                id="outlined-basic"
                label="Quantity"
                variant="outlined"
              />
              <Button variant="contained" onClick={()=>{}}>Add</Button>
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
