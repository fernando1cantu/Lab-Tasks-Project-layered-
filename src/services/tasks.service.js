import { getAllTasks, addTask } from "../repositories/tasks.repository.js";

export const fetchTasks = () => {
    return getAllTasks();
};

export const createTask = (title) => {
    if (typeof title !== "string" || !title.trim()) {
        const error = new Error("Task title is required");
        error.status = 400;
        throw error;
    }

    const tasks = getAllTasks();

    const newTask = {
        id: String(Math.max(0, ...tasks.map(task => Number(task.id))) + 1),
        title: title.trim(),
        status: "false"
    };

    return addTask(newTask);
};