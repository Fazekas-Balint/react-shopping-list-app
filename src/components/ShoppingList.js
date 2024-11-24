import React from "react";
import ShoppingItem from "./ShoppingItem";

const ShoppingList = ({ items, toggleItemCompletion, deleteItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          item={item}
          toggleItemCompletion={toggleItemCompletion}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
};

export default ShoppingList;