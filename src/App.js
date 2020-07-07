import React from 'react';
import Item from './components/items/items';
import AddItem from './components/AddItem/AddItem';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h4>ToDo</h4>
      </header>
      <div className="todo-body">
        
        <div className="item-section">
          <Item title="To Do" />
          <Item title="Completed"/>
          
        </div>
       
       
      </div>
    </div>
  );
}

export default App;
