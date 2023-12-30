import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import './App.css'; // Import 

const App = () => {
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState({ details: '', status: 'pending' });
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3001/api/todos');
    setTodos(response.data);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (editTodo) {
      await axios.put(`http://localhost:3001/api/todos/${editTodo._id}`, formData);
      setEditTodo(null); 
    } else {
      await axios.post('http://localhost:3001/api/todos', formData);
    }

    setFormData({ details: '', status: 'pending' });
    fetchTodos();
  };

  const handleEdit = (todo) => {
    setEditTodo(todo);
    setFormData({ details: todo.details, status: todo.status });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/todos/${id}`);
    fetchTodos();
  };

  const handleCancelEdit = () => {
    setEditTodo(null);
    setFormData({ details: '', status: 'pending' });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Details:
          <input type="text" name="details" value={formData.details} onChange={handleFormChange} />
        </label>
        <label>
          Status:
          <select name="status" value={formData.status} onChange={handleFormChange}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </label>
        <button className="primary" type="submit">{editTodo ? 'Update Todo' : 'Add Todo'}</button>
        {editTodo && <button type="button" className="primary" onClick={handleCancelEdit}>Cancel Edit</button>}
      </form>
      <TodoList todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
