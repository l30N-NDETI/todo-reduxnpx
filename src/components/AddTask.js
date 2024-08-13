import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../action';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description) {
      dispatch(addTask({ id: Date.now(), description, isDone: false }));
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
        className="task-input"
      />
      <button type="submit" className="task-button">Add Task</button>
    </form>
  );
};

export default AddTask;
