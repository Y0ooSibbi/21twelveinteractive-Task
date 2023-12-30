import React from 'react';

const Todos = ({ todo, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{todo._id}</td>
      <td>{todo.details}</td>
      <td>{todo.status}</td>
      <td>
        <button onClick={() => onEdit(todo)}>Edit</button>
        <button onClick={() => onDelete(todo._id)}>Delete</button>
      </td>
    </tr>
  );
};
    
export default Todos;
