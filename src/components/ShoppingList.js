import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(text) {
    setSearchText(text);
  }
  const itemsToDisplay = items.filter((item) => {
    const lowerCaseName = item.name.toLowerCase();
    const lowerCaseSearchText = searchText.trim().toLowerCase();
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    }

    if (lowerCaseSearchText !== "" && !lowerCaseName.includes(lowerCaseSearchText)) {
      return false;
    }

    return true;

  });

  
  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;
