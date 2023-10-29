import React from 'react'

const Items = ({item, onDelete}) => {

    const handleDelete = (itemToDelete) => {
        onDelete(itemToDelete);
    }
    

  return (
    <ul>
     {item.map((item, index) => {
    return (
        <div className='all-ietems'>
        <li key={index}>{item} <button className='delete-btn' onClick={() => handleDelete(item)}>Delete</button></li>
        
        </div>  
    ) 
   })}
    </ul>
  
  )
}

export default Items;