import express from "express";
import taskRoutes from "./src/routes/tasks.routes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("This is my lab, pls give me 100 :)");
});

const errorHandler = (err, req, res, next) => {
    console.error(err);

    const status = err.status || 500;

    res.status(status).json({
        success: false,
        message: err.message || "Internal Server Error."
    });
};

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
