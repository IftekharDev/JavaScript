
toDo = [];

while (true) {
    userInput = prompt("Type what you want to do: ");

    if (userInput == 'quit') {
        break;
    }

    if (userInput == 'add') {
        addTask = prompt("Enter a task to add: ");
        toDo.push(addTask);
    } else if (userInput == "list") {
        console.log(toDo);
    } else if (userInput == "delete") {
        for (task of toDo) {
            console.log(toDo.indexOf(task), task);
        }
        taskIndex = prompt("Enter the index of the task to delete it.");
        taskIndex = parseInt(taskIndex);

        toDo.splice(taskIndex, 1);
        console.log("Task deleted sucessfully.");
    } else {
        console.log("wrong selection. Please choose the correct operation.");
    }
}