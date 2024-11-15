document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const pendingTasksList = document.getElementById('pendingTasks');
    const completedTasksList = document.getElementById('completedTasks');

    function addTask(task, isCompleted = false) {
        const list = isCompleted ? completedTasksList : pendingTasksList;
        const li = document.createElement('li');
        li.textContent = task;

        const btnContainer = document.createElement('div');
        btnContainer.classList.add('task-btns');

        const completeBtn = document.createElement('button');
        completeBtn.textContent = isCompleted ? 'Undo' : 'Complete';
        completeBtn.addEventListener('click', () => toggleComplete(li, task));

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editTask(li, task));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(li));

        btnContainer.appendChild(completeBtn);
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(deleteBtn);
        li.appendChild(btnContainer);
        list.appendChild(li);
    }

    function toggleComplete(taskElement, task) {
        if (taskElement.parentNode.id === 'pendingTasks') {
            completedTasksList.appendChild(taskElement);
            taskElement.classList.add('completed');
        } else {
            pendingTasksList.appendChild(taskElement);
            taskElement.classList.remove('completed');
        }
    }

    function editTask(taskElement, task) {
        const newTask = prompt('Edit your task:', task);
        if (newTask) {
            taskElement.childNodes[0].nodeValue = newTask;
        }
    }

    function deleteTask(taskElement) {
        taskElement.remove();
    }

    addTaskBtn.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = '';
        }
    });
});
