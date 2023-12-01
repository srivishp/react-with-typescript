import Todos from "./components/Todos";
import Todo from "./models/todos";

function App() {
  // Now, the todos is an array of objects instead of strings
  const todos = [new Todo("Item 1"), new Todo("Item 2")];
  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default App;
