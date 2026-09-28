import { validateTaskDescription } from '../../utils/taskValidation.js';

const tasks = [];

export function getTasks() {
  return tasks.map((task) => ({ ...task }));
}

export function addTask(description) {
  const result = validateTaskDescription(description);

  if (!result.isValid) {
    return {
      success: false,
      error: result.message,
      task: null
    };
  }

  const task = {
    id: typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `task-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    description: result.value,
    createdAt: new Date().toISOString()
  };

  tasks.push(task);

  return {
    success: true,
    error: '',
    task
  };
}
