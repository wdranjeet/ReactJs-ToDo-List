import React from 'react';

export default function ToDoList({lists, removeTask}){
return <div>
    <ul>
        {lists.map((list, index) => {
            return <li key={index}>{list} <span key={index} onClick={removeTask}>Remove</span></li>;
        })}
    </ul>
</div>
}