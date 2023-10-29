import React, { useState } from "react";
import Items from "./components/Items";

function App() {
  const [listItem, setListItem] = useState();
  const [items, setItems] = useState([]);

  const handleItem = (event) => {
    console.log(event.target.value);
    setListItem(event.target.value);
  }
  
  const handleClick = () => {
    setItems(prevItems => {
      return [...prevItems, listItem]
    })
    setListItem("")
  };

  const handleDelete = (itemToDelete) => {
    setItems(prevItems => {
      return prevItems.filter((item) => item !== itemToDelete);
    });
  }

  const handleClear = () => {
    setItems([]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={listItem} onChange={handleItem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>

        {
          items.length === 0 ? (<p>Add Items Here</p>)
          : 
          ( 
          
          <div>
          
          <Items item={items} onDelete={handleDelete}/>


          </div> 

          
          
          )}
        
          <div className="main-btns">
          <button className="btn-clear" onClick={handleClear}>Clear List</button>
          <button className="save-btn ">Save</button>
          </div>
        
      </div>
    </div>
  );
}

export default App;
