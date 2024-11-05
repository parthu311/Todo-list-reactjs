# React + Vite To-Do List App

This project is a simple, interactive To-Do List application built with React. It allows users to manage tasks by adding, editing, deleting, and marking them as completed. The app demonstrates the use of functional components, state management, and component-based design.

Table of Contents
Getting Started
Component Overview
App Component
Header Component
ToDoList Component
ToDoItem Component
Features
Usage
Styling
Getting Started
To run this app locally:

Clone the repository to your local machine.
Navigate to the project directory.
Install dependencies with npm install.
Start the development server with npm start.
Open http://localhost:3000 in your browser to view the app.
Component Overview
This app has four main components: App, Header, ToDoList, and ToDoItem. Each component serves a specific purpose within the application.

App Component: Acts as the main wrapper for the application. It manages core state and functions, such as adding, deleting, toggling, and editing tasks. The App component renders the Header component, an input form for adding tasks, and the ToDoList component.

Header Component: Displays the app's title with an icon. This component provides a visually appealing header and uses basic flexbox styling for alignment.

ToDoList Component: Renders each task item using the ToDoItem component. It receives the list of tasks and the necessary functions (delete, toggle, and edit) as props from the App component.

ToDoItem Component: Handles individual task items and provides the ability to edit, delete, or mark them as complete. It has internal state to manage edit mode and the current edit text for each task.

Features
Add Task: Users can add a new task with a title.
Edit Task: Users can modify the text of an existing task.
Delete Task: Users can remove tasks from the list.
Toggle Completion: Users can mark tasks as completed or incomplete, changing their visual state in the list.
Usage
Adding Tasks: Enter a task in the input field and click "Add Todo" to add it to the list.
Managing Tasks:
Each task in the list has three options:
Complete: Marks a task as completed, which visually changes the task to a strikethrough style.
Edit: Allows users to edit the task text.
Delete: Removes the task from the list.
Styling
This app is styled using tailwindcss, providing a clean, responsive, and user-friendly interface.

