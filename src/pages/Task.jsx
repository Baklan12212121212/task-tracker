import { useState } from "react"

export default function Task(){
    const [tasks, setTasks]= useState([]);
    const [text, setNewText] = useState('');
    const handleClick = ()=>{
        const newTask = {
            id: Date.now(),
            text: "Новая задача"
        }
        
        setTasks([...tasks, newTask]);

    };
    const handleDelete = (id)=>{
        setTasks(tasks.filter((task)=>task.id!==id));

    };
    return(
        <div className="m-3 p-3">
            <h1>
                Мои задачи
            </h1>
            <p>Здесь вы можете добавлять, просматривать и удалять свои задачи.</p>
            <button onClick={handleClick} className="btn btn-success m-2">Добавить задачу</button>
            <ul>
                {tasks.map((task)=>{
                    return (
                        <li key={task.id}>{task.text} <button
                        onClick={()=>handleDelete(task.id)}
                        className="btn btn-danger btn-sm m-2">Удалить</button> </li>
                    )
                })}
            </ul>
        </div>
    )
}