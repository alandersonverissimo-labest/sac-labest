document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }

    function handleTaskClick(event) {
        if (event.target.classList.contains('delete-btn')) {
            event.target.closest('li').remove();
        } else if (event.target.tagName === 'SPAN') {
            event.target.closest('li').classList.toggle('completed');
        }
    }
});