import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "@components/Header/Header.jsx";
import SectionBreak from "@components/SectionBreak/SectionBreak.jsx";
import { useState, useEffect } from "react";
import Footer from "@components/Footer/Footer";
import { setHandler } from "@hooks/useHandler";
import { setValue } from "@hooks/useValue";

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);

  function onItemAdd(newItem, amount) {
    const newObject = {
      ...newItem,
      amount,
    };
    const newItemsInCart = [newObject, ...itemsInCart];

    setItemsInCart(newItemsInCart);
  }

  function onItemEdit(newItem) {
    const newItems = itemsInCart.map((item) => {
      if (item.name === newItem.name) {
        return newItem;
      }
      return item;
    });

    setItemsInCart(newItems);
  }

  useEffect(() => {
    setValue("itemsInCart", itemsInCart);

    return () => {};
  }, [itemsInCart]);

  setHandler("onItemEdit", onItemEdit);
  setHandler("onItemAdd", onItemAdd);

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
