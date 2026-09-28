# Data Model: Add Tasks

## Core Entity

### Task

| Field | Type | Description | Rules |
| --- | --- | --- | --- |
| id | string or number | Unique identifier for the task entry | Must be unique within the current session |
| description | string | User-entered task text | Must be trimmed and non-empty before submission |
| createdAt | timestamp | Time when the task was added | Automatically assigned on creation |

## State Model

The UI stores a list of Task records in memory.

```text
tasks: Task[]
```

### State transitions

1. Initial state: empty list, empty input field.
2. User types text: input value updates only.
3. User submits valid value: append Task to tasks and clear input.
4. User submits invalid value: do not mutate tasks and show validation feedback.

## Validation rules

- description is required
- description.trim().length > 0
- empty or whitespace-only input is rejected
- a valid task is added once to the visible list
