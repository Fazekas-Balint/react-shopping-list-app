import React from "react";

const ShoppingItem = ({ item, toggleItemCompletion, deleteItem }) => {
  return (
    <li
  style={{
    textDecoration: item.completed ? "line-through" : "none",
  }}
>
      <span onClick={() => toggleItemCompletion(item.id)}>{item.name}</span>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </li>
  );
};

export default ShoppingItem;