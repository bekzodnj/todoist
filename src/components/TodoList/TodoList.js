import React from "react";
import TodoListItem from "../TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos, onDeleted, 
                    toggleDone, toggleImportant }) => {
                      
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} 
        onDeleted={() => onDeleted(id)} 
        toggleDone={()=>toggleDone(id)}
        toggleImportant={()=>toggleImportant(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list my-2 shadow">{elements}</ul>;
};

export default TodoList;
