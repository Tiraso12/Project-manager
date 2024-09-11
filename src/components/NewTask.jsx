import { useState } from "react";

export default function NewTask(){
    const [enteredTask, setEnteredTask] =useState(null);

    function handleChange(event) {
        setEnteredTask(event.target.value);
        
    }


    return(
        <div className="flex items-center gap-4"> 
            <input 
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            type="text"
            onChange={handleChange}
            value={enteredTask}
            />
            <button  className="textstone700 hover:text-stone-950">Add Task</button>
        </div>
    )
}