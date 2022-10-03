import React, { useState } from 'react';
import './App.css';
import Todolist from './Todolist';
import Input from './Input_area';

function App() {
  const [items, setItems] = useState([]);
  function addItem(inputText)
  {
      setItems(prevItems => {
          return [...prevItems,inputText];
      });
  }
  function deleteItem(id)
  {
    setItems((prevItems) => {
      return prevItems.filter(
        (item, index) => {
          return index !== id; 
        }
      )
    })
  }
  return (
    <div className="container">
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <Input onAdd={addItem} />
      <div>
      <ul>
          {items.map((todoitem, index) => <Todolist
            key={index}
            id={index}
            Todoitem={todoitem}
            onChecked={deleteItem}
          />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
