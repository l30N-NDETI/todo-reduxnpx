import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks } from '../action';

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <div className="filter-buttons">
      <button onClick={() => dispatch(filterTasks('all'))}>All</button>
      <button onClick={() => dispatch(filterTasks('done'))}>Done</button>
      <button onClick={() => dispatch(filterTasks('notDone'))}>Not Done</button>
    </div>
  );
};

export default Filters;
