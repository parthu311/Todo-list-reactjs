import { useState } from "react";

function ToDoItem({ todo, deleteTask, toggleComplete, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing && editText.trim()) {
      editTask(todo.id, editText);
    }
  };

  return (
    <div className="w-1/2 my-3 mx-auto mb-4">
      <div className={`p-4 bg-white rounded-lg shadow-md flex items-center justify-between ${todo.isCompleted ? 'bg-green-100' : ''}`}>
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:border-blue-500"
            />
          ) : (
            <span className={`text-lg ${todo.isCompleted ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              {todo.text}
            </span>
          )}
        </div>
        <div className="flex space-x-2 ml-4">
          <button
            onClick={() => toggleComplete(todo.id)}
            className={`px-3 py-1 text-sm font-semibold rounded-md ${todo.isCompleted ? 'bg-yellow-500 text-white' : 'bg-blue-500 text-white'} hover:opacity-90`}
          >
            {todo.isCompleted ? 'Undo' : 'Complete'}
          </button>
          <button
            onClick={() => deleteTask(todo.id)}
            className="px-3 py-1 text-sm font-semibold bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Delete
          </button>
          <button
            onClick={handleEdit}
            className="px-3 py-1 text-sm font-semibold bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
