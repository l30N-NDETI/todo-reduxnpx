const initialState = {
    tasks: [],
    filter: 'all', // 'all', 'done', 'notDone'
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? { ...task, ...action.payload.updatedTask } : task
          ),
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, isDone: !task.isDone } : task
          ),
        };
      case 'FILTER_TASKS':
        return {
          ...state,
          filter: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  