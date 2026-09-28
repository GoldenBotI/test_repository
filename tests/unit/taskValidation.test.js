import { strict as assert } from 'node:assert';
import { validateTaskDescription, isValidTaskDescription } from '../../src/utils/taskValidation.js';

const tests = [
  {
    name: 'accepts a non-empty task description',
    input: 'Buy groceries',
    expectedValid: true,
    expectedValue: 'Buy groceries'
  },
  {
    name: 'rejects empty string',
    input: '',
    expectedValid: false,
    expectedValue: ''
  },
  {
    name: 'rejects whitespace-only input',
    input: '   ',
    expectedValid: false,
    expectedValue: ''
  }
];

for (const testCase of tests) {
  const result = validateTaskDescription(testCase.input);
  assert.equal(result.isValid, testCase.expectedValid, `${testCase.name}: validation result`);
  assert.equal(result.value, testCase.expectedValue, `${testCase.name}: normalized value`);
  assert.equal(isValidTaskDescription(testCase.input), testCase.expectedValid, `${testCase.name}: helper result`);
}

console.log('taskValidation tests passed');
