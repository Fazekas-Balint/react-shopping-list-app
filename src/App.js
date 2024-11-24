import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (item.trim() !== '') {
      setItems([...items, { text: item, completed: false }]);
      setItem('');
    }
  };

  const toggleItemCompletion = (index) => {
    const updatedItems = [...items];
    updatedItems[index].completed = !updatedItems[index].completed;
    setItems(updatedItems);
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <input 
        type="text" 
        placeholder="Add a new item" 
        value={item}
        onChange={(e) => setItem(e.target.value)} 
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.completed ? 'completed' : ''}>
            <span>{item.text}</span>
            <div>
              <button onClick={() => toggleItemCompletion(index)}>
                {item.completed ? 'Undo' : 'Complete'}
              </button>
              <button className="delete" onClick={() => deleteItem(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;