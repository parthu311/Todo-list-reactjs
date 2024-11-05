# React + Vite To-Do List App


---

# React To-Do List App

This project is a simple, interactive To-Do List application built with React. It allows users to manage tasks by adding, editing, deleting, and marking them as completed. The app demonstrates the use of functional components, state management, and component-based design.

## Table of Contents
1. Getting Started
2. Component Overview
   - App Component
   - Header Component
   - ToDoList Component
   - ToDoItem Component
3. Features
4. Usage
5. Styling

## Getting Started

To run this app locally:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies with `npm install`.
4. Start the development server with `npm run dev`.
5. Open `http://localhost:5173` in your browser to view the app.

![image](https://github.com/user-attachments/assets/c5b13472-93ea-4162-9791-da75dae8be90)


## Component Overview

This app has four main components: `App`, `Header`, `ToDoList`, and `ToDoItem`. Each component serves a specific purpose within the application.

- **App Component**: Acts as the main wrapper for the application. It manages core state and functions, such as adding, deleting, toggling, and editing tasks. The `App` component renders the `Header` component, an input form for adding tasks, and the `ToDoList` component.

- **Header Component**: Displays the app's title with an icon. This component provides a visually appealing header and uses basic flexbox styling for alignment.

- **ToDoList Component**: Renders each task item using the `ToDoItem` component. It receives the list of tasks and the necessary functions (delete, toggle, and edit) as props from the `App` component.

- **ToDoItem Component**: Handles individual task items and provides the ability to edit, delete, or mark them as complete. It has internal state to manage edit mode and the current edit text for each task.


![image](https://github.com/user-attachments/assets/ec4ea932-9246-4ba7-9daf-5c16ba56caef)


![image](https://github.com/user-attachments/assets/09206668-40ae-4c07-9145-88f3e0a0454c)



## Features

- **Add Task**: Users can add a new task with a title.
- **Edit Task**: Users can modify the text of an existing task.

   ![image](https://github.com/user-attachments/assets/6675b438-1b76-4217-ab22-3b8b02538250)

- **Delete Task**: Users can remove tasks from the list.

- ![image](https://github.com/user-attachments/assets/618ddfa5-870e-4c75-b827-e4c27b65815e)

- **Toggle Completion**: Users can mark tasks as completed or incomplete, changing their visual state in the list.
- ![image](https://github.com/user-attachments/assets/42eca1b7-d4b6-4bef-979c-06e0321e5a17)


## Usage

1. **Adding Tasks**: Enter a task in the input field and click "Add Todo" to add it to the list.
2. **Managing Tasks**:
   - Each task in the list has three options:
     - **Complete**: Marks a task as completed, which visually changes the task to a strikethrough style.
     - **Edit**: Allows users to edit the task text.
     - **Delete**: Removes the task from the list.

## Styling

This app is styled using `tailwindcss`, providing a clean, responsive, and user-friendly interface. 

--- 

