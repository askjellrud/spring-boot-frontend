import {useEffect, useState} from "react";
import TaskRow, {type Task} from "./TaskRow.tsx";

const TaskList = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/tasks')
            .then(result => {
                if (!result.ok) throw new Error('HTTP error!');
                return result.json();
            })
            .then((data: Task[]) => setTasks(data));
    }, []);

    return (
        <>
            {tasks.map(task => (
                <TaskRow key={task.id} task={task} />
            ))}
        </>
    );
}

export default TaskList