const fs = require("fs");

const getReadFile = () => {
    let taskData = JSON.parse(fs.readFileSync("./db.json" , "utf-8"));
    let tasks = taskData.task;
    return {taskData , tasks};
}

const addNewTask = (data) => {
    fs.writeFileSync("./db.json" , JSON.stringify(data))
}

module.exports = {getReadFile ,addNewTask};