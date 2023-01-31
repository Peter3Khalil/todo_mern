import Task from "../Models/task.js";
class TaskClass {
  static async addTask(req, res) {
    try {
      let task = new Task(req.body);
      await task.save();
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getTasks(req, res) {
    try {
      let tasks = await Task.find();
      if (!tasks) return res.status(404).send("Not found any tasks");
      res.status(200).json(tasks);
    } catch (error) {
      return res.status(501).send(error.message);
    }
  }

  static async deleteTask(req, res) {
    try {
      let task = await Task.findOneAndDelete({ _id: req.params.id });
      if (!task) return res.status(404).send("Not found any tasks");
      res.status(200).json(task);
    } catch (error) {
      return res.status(501).send(error.message);
    }
  }
  static async deleteAllTasks(req,res) {
    try {
      await Task.deleteMany({});
      return res.status(200).sand("Reset documents")
    } catch (error) {
        return res.status(501).send(error.message)
    }
  }
  static async editTask(req,res){
    try {
        await Task.findOneAndUpdate({_id:req.params.id},req.body);
        return res.status(200).send("Updated successfully")
    } catch (error) {
        return res.status(501).json(error.message)
    }
  }
}
export default TaskClass;
