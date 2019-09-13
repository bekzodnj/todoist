import React from "react";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";

import ItemStatusFilter from "../ItemStatusFilter";

import "./App.css";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Build React App", important: true, id: 2 },
    { label: "Have a lunch", important: true, id: 3 }
  ];

  return (
    <div className="todo-app">
      <AppHeader todo={1} done={3} />

      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} onDeleted={id => console.log("del", id)} />
    </div>
  );
};

export default App;
