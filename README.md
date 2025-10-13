**React Testing Library Points**

render() // Mounts a React component into a virtual DOM so you can test it.

screen() // Provides access to the rendered DOM elements; you can query them by text, placeholder, role, etc.

fireEvent() // Simulates user interactions like clicks, typing, focus, or change events.

Jest - is the test runner and assertion library. It provides test(), describe(), and expect(), but it does not render components or simulate events.

RTL - is the helper that lets you interact with React components in a way a user would, while Jest just checks if your expectations are true.

**Basic Query Methods**

getBy()
Returns - Returns single element
Throws Error - ✅ Throws if not found
Use Case - Use when element must exist

queryBy()
Returns - Returns single element or null
Throws Error - ❌ Returns null if not found
Use Case - Use when element may or may not exist

getAllBy()
Returns - Returns array of elements
Throws Error - ✅ Throws if none found
Use Case - found
Use when multiple elements expected

queryAllBy()
Returns - Returns array of elements
Throws Error - ❌ Returns empty array if none
Use Case - Optional multiple elements

**Query Types**
*getByText("text")* = Element containing exact text  
*getByRole("role")* = Element by ARIA role (button, checkbox, etc.)
*getByPlaceholderText("placeholder")* = Input element with a placeholder  
*getByLabelText("label")* = Input associated with a `<label>`  
*getByTestId("id")* = Element with `data-testid="id"`



const addButton = screen.getByText("Add"); // here is the text will be same then text cas will pass when we add like ("Add")


Use regex for case-insensitive matching:
screen.getByText(/add/i);  // but wel you use like "regex" it will matches ;ike - "Add", "add", "ADD", etc.