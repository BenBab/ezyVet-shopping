import React from 'react';
import './App.css';

import ToDoContainer from './containers/ToDo/ToDoContainer';
import AddToDo from './containers/ToDo/AddToDo';


function App() {
  return (
    <div>
      <AddToDo/>
      <ToDoContainer/>
    </div>
  );
}

export default App;
