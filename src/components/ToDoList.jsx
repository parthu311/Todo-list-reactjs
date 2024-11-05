import ToDoItem from "./ToDoItem";

function ToDoList({ toDos = [], deleteTask, toggleComplete, editTask }) {
  return (
    <div className="todo-list">
      {toDos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default ToDoList;
