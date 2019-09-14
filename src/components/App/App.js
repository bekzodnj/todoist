import React from "react";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";

import ItemStatusFilter from "../ItemStatusFilter";

import "./App.css";

class App extends React.Component{
   state = {
    todoData : [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Build React App", important: true, id: 2 },
      { label: "Have a lunch", important: true, id: 3 }
    ],
   }

   deleteItem = (id) =>{
     //console.log(id);

       
   }

   render(){
    return (
      <div className="todo-app">
        <AppHeader todo={1} done={3} />
  
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
      </div>
    );
   }
};

export default App;
