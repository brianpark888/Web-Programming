// Assuming this is in a file named ToDoItem.js in a folder named 'todolist'
class ToDoItem {
    constructor(task, dueDate, tag) {
        this.task = task;
        this.dueDate = dueDate;
        this.tag = tag;
        this.completed = false; // Corrected boolean value
    }
    
    toggleComplete() {
        this.completed = !this.completed;
    }
}

export default ToDoItem; // Corrected export to match the class name
