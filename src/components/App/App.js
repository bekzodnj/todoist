import React from "react";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import ItemAddForm from "../ItemAddForm";

import ItemStatusFilter from "../ItemStatusFilter";
import img1 from "./images/bluesky.jpg";

import "./App.css";


class App extends React.Component{
  counter = 100;
   state = {
    todoData : [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Build React App", important: false, id: 2 },
      { label: "Have a lunch", important: true, id: 3 }
    ],
   }

   deleteItem = (id) =>{
     this.setState(({todoData})=>{

        //find index of deleted item
        const idx = todoData.findIndex(el=> el.id === id);

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

   addItem = (text) =>{
      const newItem = {
        label: text,
        important: false,
        id: this.counter++,
      }
      
      this.setState(({todoData})=>{
          const newTodoData = [
              ...todoData,
              newItem
          ];

          return{
              todoData: newTodoData
          }
      });
   }

   toggleDone = (id) =>{
      console.log("Done", id);
   }

   toggleImportant = (id) =>{
    console.log("Important", id);
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
    
          <TodoList todos={this.state.todoData} onDeleted={this.deleteItem}
          toggleDone={this.toggleDone} toggleImportant={this.toggleImportant} />
          <ItemAddForm onItemAdded={this.addItem}/>
      </div>       
      </div>
    );
   }
};

export default App;
