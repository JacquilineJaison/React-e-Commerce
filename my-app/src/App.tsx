import { useState } from "react";
import Header from "./components/Layout/Header";
import Groceries from "./components/Grocery/Groceries";
import CartDialog from "./components/Cart/CartDialog";
import CartProvider from "./store/CartProvider";

// TODO Create A Modal using portal from scartch in another branch

const App = () => {
  const [display, setDisplay] = useState<boolean>(false);

  const handleDisplay = (status: boolean) => {
    setDisplay(status);
  };

  return (
    <CartProvider>
      {display && (
        <CartDialog onShut={() => handleDisplay(false)} display={display} />
      )}
      <Header onDisplay={() => handleDisplay(true)}></Header>
      <main>
        <Groceries></Groceries>
      </main>
    </CartProvider>
  );
};

export default App;
