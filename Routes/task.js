import TaskClass from "../Controller/task.js";
import { Router } from "express";
const route = Router();

route.post("/",TaskClass.addTask);
route.get("/",TaskClass.getTasks);
route.put("/:id",TaskClass.editTask);
route.delete("/:id",TaskClass.deleteTask);
route.delete("/",TaskClass.deleteAllTasks);

export default route;