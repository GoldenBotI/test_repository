export function createTaskItem(task) {
  const item = document.createElement('li');
  item.className = 'task-item';

  const label = document.createElement('span');
  label.textContent = task.description;
  item.appendChild(label);

  return item;
}
