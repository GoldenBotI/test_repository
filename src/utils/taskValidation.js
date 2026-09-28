export function normalizeTaskDescription(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export function isValidTaskDescription(value) {
  return normalizeTaskDescription(value).length > 0;
}

export function validateTaskDescription(value) {
  const normalizedValue = normalizeTaskDescription(value);

  if (!normalizedValue) {
    return {
      isValid: false,
      value: '',
      message: 'Task description is required.'
    };
  }

  return {
    isValid: true,
    value: normalizedValue,
    message: ''
  };
}
