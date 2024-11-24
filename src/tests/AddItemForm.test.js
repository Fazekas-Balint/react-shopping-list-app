import { render, screen, fireEvent } from "@testing-library/react";
import AddItemForm from "../components/AddItemForm";

describe("AddItemForm component", () => {
  test("renders the input field and add button", () => {
    render(<AddItemForm addItem={jest.fn()} />);
    
    expect(screen.getByPlaceholderText("Add a new item")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  test("calls addItem when form is submitted with a non-empty input", () => {
    const mockAddItem = jest.fn();
    render(<AddItemForm addItem={mockAddItem} />);

    const input = screen.getByPlaceholderText("Add a new item");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Milk" } });
    fireEvent.click(button);

    expect(mockAddItem).toHaveBeenCalledWith("Milk");
    expect(mockAddItem).toHaveBeenCalledTimes(1);
  });

  test("does not call addItem when the input is empty", () => {
    const mockAddItem = jest.fn();
    render(<AddItemForm addItem={mockAddItem} />);
  
    const button = screen.getByText("Add");
  
    fireEvent.click(button);
  
    expect(mockAddItem).not.toHaveBeenCalled();
  });

  test("clears the input field after submission", () => {
    const mockAddItem = jest.fn();
    render(<AddItemForm addItem={mockAddItem} />);

    const input = screen.getByPlaceholderText("Add a new item");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Bread" } });
    fireEvent.click(button);

    expect(input.value).toBe("");
  });
});
