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
        this.createTodoItem("Drink a coffee"),
        this.createTodoItem("Build a React App"),
        this.createTodoItem("Have a dinner"),
    ],
   }
   createTodoItem(label){
      return{
        label,
        important: false,
        done: false,
        id: this.counter++,
      }
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
      const newItem = this.createTodoItem(text);
      
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

   toggleProperty(arr, id, propName){
      const idx = arr.findIndex(el=> el.id===id);
            
      const oldItem = arr[idx];
      
      // creating new item, with property with inverse ->t->f->t
      const newItem = {...oldItem, [propName]: !oldItem[propName]};

      // 2. Creating updated array of items
      return [
          ...arr.slice(0, idx),
          newItem,
          ...arr.slice(idx+1)
      ];
   }
   toggleDone = (id) =>{
      this.setState(({todoData})=>{
          return{
              todoData: this.toggleProperty(todoData, id, 'done')
          }
      });
   }

   toggleImportant = (id) =>{
      this.setState(({todoData})=>{
        return{
            todoData: this.toggleProperty(todoData, id, 'important')
        }
      });
   }
   render(){

    const doneCount = this.state.todoData.filter(el => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;

    return (
      <div className="wrap" style={{background: `url(${img1})`, backgroundSize: 'cover'}}>
          <div className="todo-app">
          <AppHeader todo={todoCount} done={doneCount}/>
    
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
