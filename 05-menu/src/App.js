import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";

import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// step 1: add 'all' to array;
// step 2: ...new Set: remove duplicate elements from array
// step 3: push category from items to allCategories: 'breakfast', 'lunch', 'shakes'
// final: ['all', 'breakfast', 'lunch', 'shakes']
// array length: 4
console.log("allCategories: ", allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
