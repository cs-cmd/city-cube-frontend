import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "@components/Header/Header.jsx";
import SectionBreak from "@components/SectionBreak/SectionBreak.jsx";
import { useState } from "react";
import Footer from "@components/Footer/Footer";

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);

  function handleItemAdd(newItem, amount = 1) {
    const newObject = {
      ...newItem,
      amount,
    };

    const newItems = itemsInCart.push(newObject);
    setItemsInCart(newItems);
  }

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
