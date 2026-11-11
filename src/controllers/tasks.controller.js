import { fetchTasks, createTask } from "../services/tasks.service.js";

export const getTasks = (req, res, next) => {
    try {
        const allTasks = fetchTasks();

        res.status(200).json({
            success: true,
            data: allTasks
        });
    } catch (error) {
        next(error);
    }
};

export const postTask = (req, res, next) => {
    try {
        const { title } = req.body;

        const newTask = createTask(title);

        res.status(201).json({
            success: true,
            data: newTask
        });
    } catch (error) {
        next(error);
    }
};