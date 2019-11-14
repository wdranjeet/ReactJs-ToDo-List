import React from 'react';

export default function ToDoList({lists}){
return <div>
    <ul>
        {lists.map((list, index) => {
            return <li key={index}>{list}</li>;
        })}
    </ul>
</div>
}