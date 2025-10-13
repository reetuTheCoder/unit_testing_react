import { render, screen, fireEvent, within } from "@testing-library/react";
import TodoApp from "./Components/TodoApp";

describe("TodoApp Step-by-Step Tests", () => {
  test("renders input and add button", () => {
    render(<TodoApp />);

    // Find input and button
    const input = screen.getByPlaceholderText(/add or edit task/i);
    const addButton = screen.getByText(/add/i);

    expect(input).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test("can add a new todo and display in the list", () => {
    render(<TodoApp />);

    // Find input and button
    const input = screen.getByPlaceholderText(/add or edit task/i);
    const addButton = screen.getByText(/add/i);
    // Type a todo
    fireEvent.change(input, { target: { value: "Test Todo 1" } });
    // Click add button
    fireEvent.click(addButton);
    // Check if the todo appears in the list
    expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
    expect(input.value).toBe("");
  });

  test("can add a new todo with a delete button", () => {
    render(<TodoApp />);

    const input = screen.getByPlaceholderText(/add or edit task/i);
    const addButton = screen.getByText(/add/i);
    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText("Test Todo").closest("li");
    expect(todoItem).toBeInTheDocument();

    // Check that Delete button exists inside this todo
    const deleteButton = within(todoItem).getByText("❌");
    expect(deleteButton).toBeInTheDocument();
  });
  test("can delete a todo", () => {
    render(<TodoApp />);

    const input = screen.getByPlaceholderText(/add or edit task/i);
    const addButton = screen.getByText(/add/i);
    fireEvent.change(input, { target: { value: "Todo 1" } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: "Todo 2" } });
    fireEvent.click(addButton);

    const firstTodoItem = screen.getByText("Todo 1").closest("li");
    const deleteButton = within(firstTodoItem).getByText("❌");
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Todo 1")).toBeNull();
    expect(screen.getByText("Todo 2")).toBeInTheDocument();
  });
  test("can add multiple todos", () => {
    render(<TodoApp />);

    const input = screen.getByPlaceholderText(/add or edit task/i);
    const addButton = screen.getByText(/add/i);

    const todos = ["Todo 1", "Todo 2", "Todo 3"];
    todos.forEach((todo) => {
      fireEvent.change(input, { target: { value: todo } });
      fireEvent.click(addButton);
    });

    todos.forEach((todo) => {
      expect(screen.getByText(todo)).toBeInTheDocument();
    });
  });
});
