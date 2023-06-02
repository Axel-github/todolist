import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {

  const [todo, setToDo] = useState([
    {
      id: 1,
      title: 'first todo',
      status: true
    },
    {
      id: 2,
      title: 'second todo',
      status: true
    },
    {
      id: 3,
      title: 'third todo',
      status: false
    },
  ])

  return (
    <div className="App">
      <Header />
      <AddToDo todo={todo} setToDo={setToDo} />
      <ToDoList todo={todo} setToDo={setToDo} />
    </div>
  );
}

export default App
