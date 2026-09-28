import { addTask, getTasks } from './state/taskStore.js';
import { createTaskInputForm } from './components/TaskInputForm.js';
import { createTaskList } from './components/TaskList.js';

const appRoot = document.getElementById('app');

const taskList = createTaskList(getTasks());
const taskForm = createTaskInputForm((description) => {
  const result = addTask(description);

  if (!result.success) {
    taskForm.error.textContent = result.error;
    taskForm.error.hidden = false;
    taskForm.input.setAttribute('aria-invalid', 'true');
    return;
  }

  taskList.update(getTasks());
  taskForm.error.hidden = true;
  taskForm.input.removeAttribute('aria-invalid');
});

const container = document.createElement('main');
container.className = 'todo-app';

const heading = document.createElement('h1');
heading.textContent = 'To-Do List';

container.appendChild(heading);
container.appendChild(taskForm.element);
container.appendChild(taskList.element);
appRoot.appendChild(container);
