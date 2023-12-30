# Task App - CRUD Operations with React and Node

This project is a simple task management application built using React for the frontend and Node.js for the backend. The goal is to enable users to perform CRUD (Create, Read, Update, Delete) operations on a list of tasks. The application features a user-friendly interface with a form to add or edit tasks and a table displaying all tasks with options to edit and delete each record.

## Features

1. **CRUD Operations:**
   - Users can create new tasks with a unique ID, details, and status (pending or completed).
   - Tasks can be updated with new details or marked as completed.
   - Users can delete tasks to remove them from the list.

2. **Form with ID, Details, and Status:**
   - The form includes fields for ID, Details, and Status.
   - Users can input task details and choose the status (pending or completed).

3. **Table Display:**
   - All tasks and their respective fields are listed in a table format.
   - Each task entry in the table includes an edit and delete button for easy management.

4. **Data Storage:**
   - Task data is stored either in a database or a file, facilitating persistence between sessions.

5. **Single Screen Operations:**
   - All CRUD operations are conveniently available on a single screen for a seamless user experience.

6. **Node APIs:**
   - Node.js APIs have been created to handle backend operations, providing a robust and efficient server-side architecture.

## Getting Started

Follow these steps to set up and run the application:

### Backend (Node.js)

1. Navigate to the `backend` folder.
2. Install dependencies using `npm install`.
3. Start the server with `npm start`.

### Frontend (React)

1. Navigate to the `frontend` folder.
2. Install dependencies using `npm install`.
3. Start the development server with `npm start`.

Access the application by visiting [http://localhost:3000](http://localhost:3000) in your web browser.

## Important Notes

- Ensure that both the frontend and backend servers are running concurrently for the full functionality of the application.
- Data storage and retrieval methods (database or file) can be customized based on project requirements.

Feel free to explore and modify the code to suit your needs. If you encounter any issues or have suggestions for improvement, please reach out. Happy coding!
