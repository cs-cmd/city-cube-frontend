import menuObjects from "@data/menuObjects.js";
import MenuItem from "@components/MenuItem/MenuItem";
import SectionBreak from "@components/SectionBreak/SectionBreak";
import "./MenuPage.css";
import { useState, } from "react";

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState(null);

  // const menuItems = await menuObjectsts;
  // add filter option for flavors, price, etc.
  const menuQueryResults = menuObjects;
  const newMenuItems = menuQueryResults.map((menuObject, index) => (
    <MenuItem key={index} {...menuObject} />
  ));
  if (menuItems === null) {
    setMenuItems(newMenuItems);
  }

  return (
    <main className="menu-page">
      <h1 className="page-header">Our Menu</h1>
      <SectionBreak />
      <section className="menu-section">
        {menuItems === null ? (
          <p className="centered-text">Loading Menu...</p>
        ) : (
          menuItems
        )}
      </section>
    </main>
  );
}
