import menuObjects from "@data/menuObjects.js";
import MenuItem from "@components/MenuItem/MenuItem";
import SectionBreak from "@components/SectionBreak/SectionBreak";
import "./MenuPage.css";

export default function MenuPage() {
  const menuItems = menuObjects.map((menuObject, index) => (
    <MenuItem key={index} {...menuObject} />
  ));

  return (
    <main className="menu-page">
      <h1 className="page-header">Our Menu</h1>
      <SectionBreak />
      {menuItems}
    </main>
  );
}
