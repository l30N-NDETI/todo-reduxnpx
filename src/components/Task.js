import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from '../action';
import { FaEdit, FaCheck, FaTimes } from 'react-icons/fa';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask(task.id, { description }));
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.isDone ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
        className="task-checkbox"
      />
      {isEditing ? (
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onBlur={handleEdit}
          className="task-edit-input"
        />
      ) : (
        <span onClick={() => setIsEditing(true)} className="task-text">
          {task.description}
        </span>
      )}
      {isEditing ? (
        <FaCheck onClick={handleEdit} className="task-icon task-icon-check" />
      ) : (
        <FaEdit onClick={() => setIsEditing(true)} className="task-icon task-icon-edit" />
      )}
    </div>
  );
};

export default Task;
