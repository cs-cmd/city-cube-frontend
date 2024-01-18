import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "@components/Header/Header.jsx";
import SectionBreak from "@components/SectionBreak/SectionBreak.jsx";
import { useState, useEffect } from "react";
import Footer from "@components/Footer/Footer";
import { setHandler } from "@hooks/useHandler";
import { useValue } from "@hooks/useValue";

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);

  function handleItemAdd(newItem, amount) {
    const newObject = {
      ...newItem,
      amount,
    };

    const newItemsInCart = itemsInCart.slice();
    newItemsInCart.splice(0, 0, newObject);

    setItemsInCart(newItemsInCart);
  }

  useEffect(() => {
    useValue("itemsInCart", itemsInCart);
    return () => {
      null;
    };
  }, [itemsInCart]);

  setHandler("onItemAdd", handleItemAdd);

  return (
    <>
      <Header itemsInCart={itemsInCart.length} />

      <SectionBreak />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
