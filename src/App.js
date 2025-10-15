import './App.css';
import ContactForm from './Components/Forms/ContactForm';
import LoginForm from './Components/Forms/LoginForm';
// import TodoApp from './Components/TodoApp';

function App() {
  return (
    <div className="App">
     {/* <TodoApp/> */}
     <LoginForm/>
      <ContactForm/>
    </div>
  );
}

export default App;
