import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [titleTodo, setTitleTodo] = useState("");
  const [todos, setTodos] = useState([]); 

  function addTask(e) {
    e.preventDefault();
    if (titleTodo.trim()) {
      const newTodo = { id: Date.now(), text: titleTodo, isCompleted: false };
      setTodos([...todos, newTodo]);
      setTitleTodo("");
    }
  }

  const deleteTask = (id) => {
    setTodos(todos.filter((task) => task.id !== id)); 
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTodos(
      todos.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  return (
    <>
      <Header />
      <div className="flex items-center mx-5 bg-gray-100 justify-center">
        <form className="space-y-4" onSubmit={addTask}>
          <input
            type="text"
            placeholder="Enter Your Title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={titleTodo}
            onChange={(e) => setTitleTodo(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Add Todo
          </button>
        </form>
      </div>
      <ToDoList
        toDos={todos} 
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />
    </>
  );
}

export default App;
