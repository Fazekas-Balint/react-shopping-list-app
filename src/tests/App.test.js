import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../App'; 

test("should add an item to the shopping list", () => {
  render(<App />);
  
  const input = screen.getByPlaceholderText("Add a new item");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: 'Milk' } });
  fireEvent.click(button);

  const newItem = screen.getByText("Milk");
  expect(newItem).toBeInTheDocument();
});

test("should delete an item", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Add a new item");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Bread" } });
  fireEvent.click(button);

  const deleteButton = screen.getByText("Delete");
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Bread")).not.toBeInTheDocument();
});