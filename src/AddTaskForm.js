import React from 'react';

export default function MyTodoForm({placeholder="Enter  Your Task", buttonName="Enter you Button name", buttonLabel='Add Task', addTask, onInputChange, value}){
    console.log({value});
    return <div>
    <input type="text"
        placeholder={placeholder}
        onChange={onInputChange}
        value={value}
     />
    <button onClick={addTask}>{buttonLabel}</button>
    </div>
}