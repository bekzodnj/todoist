import React from "react";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";

import ItemStatusFilter from "../ItemStatusFilter";
import img1 from "./images/bluesky.jpg";
import img2 from "./images/wallpaper.jpg";

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
     this.setState(({todoData})=>{

        //find index of deleted item
        const idx = todoData.findIndex(el=> el.id == id);

        // slicing only needed parts, without id
        const before = todoData.slice(0, idx);
        const after = todoData.slice(idx+1);

        // create new array
        const newTodoData = [...before, ...after];

        // setting newTodoData as a new state 
        return{
          todoData: newTodoData 
        }
     });
       
   }

   render(){
    return (
      <div className="wrap" style={{background: `url(${img1})`, backgroundSize: 'cover'}}>
          <div className="todo-app">
          <AppHeader todo={1} done={3}/>
    
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
    
          <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
      </div>       
      </div>
    );
   }
};

export default App;
