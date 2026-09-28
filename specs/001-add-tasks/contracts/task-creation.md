# UI Contract: Task Creation

## Purpose

Describes the expected behavior of the Add Tasks interaction in the single-page application.

## Input contract

- The task entry field accepts free-form text.
- The field is required for a valid submission.
- The value is trimmed before validation.

## Action contract

### Add Task

**Trigger**: user clicks Add button or submits the form.

**Preconditions**:
- task description is not empty after trimming

**Success result**:
- a new task is added to the in-memory list
- the list rerenders immediately
- the input is cleared for the next entry

**Failure result**:
- no task is created
- the field is flagged invalid
- the user sees a clear error message

## Output contract

- The task list updates in the same page instance.
- No navigation or full-page reload occurs.
- The UI reflects the current task count and visible list immediately.
