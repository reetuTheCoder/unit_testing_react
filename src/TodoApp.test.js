import { render, screen, fireEvent} from "@testing-library/react";
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
    fireEvent.change(input, { target: { value: "Test Todo" } });
    // Click add button
    fireEvent.click(addButton);

    // Check if the todo appears in the list
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });
});
