import { render, screen } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";

test("renders items in the shopping list", () => {
  const mockItems = [
    { id: 1, name: "Apple", completed: false },
    { id: 2, name: "Banana", completed: true },
  ];

  render(
    <ShoppingList
      items={mockItems}
      toggleItemCompletion={() => {}}
      deleteItem={() => {}}
    />
  );

  expect(screen.getByText("Apple")).toBeInTheDocument();
  expect(screen.getByText("Banana")).toBeInTheDocument();
});