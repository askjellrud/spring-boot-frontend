import {useEffect, useState} from "react";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const Tasks = () => {

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

export default Tasks