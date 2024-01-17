import menuObjects from "@data/menuObjects.js";
import MenuItem from "@components/MenuItem/MenuItem";
import SectionBreak from "@components/SectionBreak/SectionBreak";
import "./MenuPage.css";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState(null);

  // Get items from menuObjects
  useEffect(() => {
    async function getItems() {
      // const menuItems = await menuObjects;
      const menuQueryResults = menuObjects;

      const preMenuItems = menuQueryResults.map((menuObject, index) => (
        <MenuItem key={index} {...menuObject} />
      ));

      setMenuItems(preMenuItems);
    }

    if (menuItems === null) {
      getItems();
    }
  });

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
