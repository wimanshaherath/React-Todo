import React from 'react';
import './AddItem.css';


const AddItem = (props)=>
{
    return(
        <div className='inputform'>
            <textarea className="input-task" placeholder='Enter the task'></textarea>
            <button type='button' className='addnew'>Add</button>
          
            
        </div>
        
    );
}

export default AddItem;