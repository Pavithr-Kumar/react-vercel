import "./App.css";
import { Header } from "./components/Header";
import { ToDo } from "./components/ToDo";

function App() {
  return (
    <>
      <Header />
      <h1>ToDo App</h1>
      <ToDo />
    </>
  );
}

export default App;
