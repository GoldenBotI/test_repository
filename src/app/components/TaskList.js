import { createTaskItem } from './TaskItem.js';

export function createTaskList(initialTasks = []) {
  const list = document.createElement('ul');
  list.className = 'task-list';

  const update = (tasks) => {
    list.innerHTML = '';

    if (!tasks || tasks.length === 0) {
      const emptyState = document.createElement('li');
      emptyState.className = 'task-empty';
      emptyState.textContent = 'No tasks yet. Add one above.';
      list.appendChild(emptyState);
      return;
    }

    tasks.forEach((task) => {
      list.appendChild(createTaskItem(task));
    });
  };

  update(initialTasks);

  return {
    element: list,
    update
  };
}
