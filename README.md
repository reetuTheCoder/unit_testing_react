React Testing Library Points

render() // Mounts a React component into a virtual DOM so you can test it.

screen() // Provides access to the rendered DOM elements; you can query them by text, placeholder, role, etc.


fireEvent() // Simulates user interactions like clicks, typing, focus, or change events.



Jest - is the test runner and assertion library. It provides test(), describe(), and expect(), but it does not render components or simulate events.

RTL - is the helper that lets you interact with React components in a way a user would, while Jest just checks if your expectations are true.