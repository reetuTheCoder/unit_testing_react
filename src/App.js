import "./App.css";
import AuthApp from "./Components/AuthApp";
import ContactForm from "./Components/Forms/ContactForm";
import LoginForm from "./Components/Forms/LoginForm";
import NewContactForm from "./Components/NewForms/NewContactForm";
import { AuthProvider } from "./context/AuthContext";
// import TodoApp from './Components/TodoApp';

function App() {
  return (
    <div className="App">
      {/* <TodoApp/> */}
      {/* <LoginForm /> */}
      {/* <ContactForm /> */}

      {/* <AuthProvider>
        <AuthApp />
      </AuthProvider> */}

      <NewContactForm/>
    </div>
  );
}

export default App;
