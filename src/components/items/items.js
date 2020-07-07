import React from 'react';
import AddItem from '../AddItem/AddItem';
import './item.css';

const items = (props)=>
{
    return(
        <div>
            <div className="item-main">
                <div className="title">
                <h5>{props.title}</h5>
                </div>
                <div className="tasks">
                    <div className="task-list" draggable>ss</div>
                    
                    <div className="Add-task">+Add new task</div>
                    <div className="Add-form"><AddItem></AddItem></div>
                </div>
            </div>
            
        </div>
        
    );
}

export default items;