import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import Filters from './components/Filters';
import './styles.css';

const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <h1>ToDo List</h1>
      <AddTask />
      <Filters />
      <ListTask />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default App; 