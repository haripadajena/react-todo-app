import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./index.css";
import { useState } from "react";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { id: Date.now(), name: itemName, duedate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem = (id) => {
    const updatedTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(updatedTodoItems);
  };
  return (
    <div className="container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length == 0 ? (
        <WelcomeMessage></WelcomeMessage>
      ) : (
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      )}
    </div>
  );
}
export default App;
