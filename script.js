document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    // Function to create a new task item
    function createTaskItem(taskText) {
        const li = document.createElement('li');

        const checkbox = document.createElement('div');
        checkbox.classList.add('checkbox');

        const span = document.createElement('span');
        span.textContent = taskText;

        const clearButton = document.createElement('button');
        clearButton.textContent = 'Clear';
        clearButton.classList.add('clear-button');
        clearButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the li click event
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(clearButton);

        li.addEventListener('click', (e) => {
            if (e.target !== clearButton) { // Check if the click target is not the "Clear" button
                checkbox.classList.toggle('checked');
                li.classList.toggle('completed');
            }
        });

        return li;
    }

    // Add a task when the button is clicked
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = ''; // Clear input field
        }
    });

    // Add a task when the Enter key is pressed
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
