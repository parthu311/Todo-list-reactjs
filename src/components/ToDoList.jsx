import ToDoItem from "./ToDoItem";

function ToDoList({toDos,deleteTask, toggleComplete, editTask}){
    return(
        <>
        {toDos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      ))}
        </>
    )
}

export default ToDoList;