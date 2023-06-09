// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";

const Cart = () => {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Chip
          icon={
            <>
              <ShoppingCartOutlinedIcon />
              <Badge badgeContent={1} color="secondary" />
            </>
          }
          label="My Cart"
        ></Chip>
      </Stack>
    </>
  );
};

export default Cart;
