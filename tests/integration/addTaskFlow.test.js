import { strict as assert } from 'node:assert';
import { addTask } from '../../src/app/state/taskStore.js';

const validResult = addTask('Write report');
assert.equal(validResult.success, true, 'valid task should be accepted');
assert.equal(validResult.task.description, 'Write report', 'task description should be preserved');

const invalidResult = addTask('   ');
assert.equal(invalidResult.success, false, 'empty task should be rejected');
assert.equal(invalidResult.task, null, 'no task should be created for invalid input');

console.log('addTaskFlow tests passed');
