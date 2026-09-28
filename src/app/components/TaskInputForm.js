import { validateTaskDescription } from '../../utils/taskValidation.js';

export function createTaskInputForm(onSubmit) {
  const form = document.createElement('form');
  form.className = 'task-form';

  const inputGroup = document.createElement('div');
  inputGroup.className = 'task-input-group';

  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'taskDescription';
  input.placeholder = 'Enter a task';
  input.setAttribute('aria-label', 'Task description');

  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Add';

  const error = document.createElement('p');
  error.className = 'task-error';
  error.setAttribute('role', 'alert');
  error.hidden = true;

  form.appendChild(inputGroup);
  inputGroup.appendChild(input);
  inputGroup.appendChild(button);
  form.appendChild(error);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const validation = validateTaskDescription(input.value);
    if (!validation.isValid) {
      error.textContent = validation.message;
      error.hidden = false;
      input.setAttribute('aria-invalid', 'true');
      return;
    }

    error.hidden = true;
    input.removeAttribute('aria-invalid');
    onSubmit(validation.value);
    input.value = '';
    input.focus();
  });

  return {
    element: form,
    input,
    error
  };
}
