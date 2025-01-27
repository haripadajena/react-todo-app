import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./index.css";
function App() {
  const todoItems = [
    {
      name: "Purchase Book",
      duedate: "04/05/2025",
    },
    {
      name: "Goto College",
      duedate: "04/05/2025",
    },
    {
      name: "Like this Video",
      duedate: "04/05/2025",
    },
  ];
  return (
    <div class="container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </div>
  );
}
export default App;
