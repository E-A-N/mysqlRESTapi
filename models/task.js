const db = require("../dbConnect");
const q$ = db.query;
let task = {};

task.getAllTasks =  (call) => {
    const command = "Select * from task";
    return q$(command, call);
}

task.getTaskById = (id, call) => {
    const command = "Select * from task where Id=?";
    return q$(command, [id], call);
}

task.addTask = (task, call) => {
    const command = "Insert into task values(?,?,?)";
    return q$(command,[task], call);
}

task.deleteTask = (id, call) =>  {
    const command = "Delete from task where Id=?";;
    return q$(command,[id],call);
}

task.updateTask = (id, task, call) => {
    const command = "Update task set Title=?, Status=? where Id=?";
    return q$(command, [task.title,task.status, id], call);
}

module.exports = task;
