import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ toDoList }) => (
        <div>
            {toDoList.map( (item, index) => <ToDoItem key={index} {...item}/> )}
        </div>
    );

export default ToDoList;