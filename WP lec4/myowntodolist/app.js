class Task {
    constructor(title, dueDate, tags) {
        this.id = Date.now();
        this.title = title;
        this.dueDate = dueDate;
        this.tags = tags;
        this.completed = false;
    }

    render() {
        const listItem = document.createElement('li');
        listItem.className = this.tags;
        listItem.textContent = `${this.title} - Due: ${this.dueDate}`;

        const tickButton = this.createTickButton(listItem);
        const deleteButton = this.createDeleteButton();

        listItem.appendChild(tickButton);
        listItem.appendChild(deleteButton);

        document.getElementById('todoList').appendChild(listItem);
    }

    createTickButton(listItem) {
        const button = document.createElement('button');
        button.textContent = '✓';
        button.style.margin = '0 5px';
        button.onclick = () => {
            listItem.classList.toggle('completed');
        };
        return button;
    }

    createDeleteButton() {
        const button = document.createElement('button');
        button.textContent = '🗑️';
        button.onclick = () => {
            const index = tasks.findIndex(t => t.id === this.id);
            if (index !== -1) {
                tasks.splice(index, 1);
                document.getElementById('todoList').innerHTML = ''; // Clear the list
                tasks.forEach(task => task.render()); // Re-render all tasks
            }
        };
        return button;
    }
}

let tasks = [];

document.getElementById('addBtn').addEventListener('click', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const dueDate = document.getElementById('dueDate').value.trim();
    const tags = document.getElementById('tags').value;

    if (!title || !dueDate) {
        alert('Please fill in all fields.');
        return;
    }

    const task = new Task(title, dueDate, tags);
    tasks.push(task);
    task.render();

    document.getElementById('form-container').reset();
});
