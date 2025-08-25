import {useEffect, useState} from "react";
import TaskRow, {type Task} from "./TaskRow.tsx";

const TaskList = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('http://localhost:8080/tasks');
            if (!response.ok) {
                throw new Error(`HTTP error!`);
            }
            const data: Task[] = await response.json();
            setTasks(data);
        };

        fetchTasks();
    }, []);

    return (
        <>
            {tasks.map(task => (
                <TaskRow key={task.id} task={task}/>
            ))}
        </>
    );
}

export default TaskList