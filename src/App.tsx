import './App.css'
import {useEffect, useState} from "react";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const App = () => {

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
            <h1>Tasks 2</h1>
            {(
                tasks.map(task => (
                    <div key={task.id}>
                        <strong>{task.title}</strong> - {task.completed ? 'Completed' : 'Pending'}
                    </div>
                ))
            )}
        </>
    )
}

export default App