# Tasks: Add Tasks

**Input**: Design documents from `/specs/001-add-tasks/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md, contracts/

**Tests**: The examples below include test tasks because validation and UI behavior are explicitly required by the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the SPA structure and shared validation building blocks

- [x] T001 Create the app structure under src/app/, src/styles/, src/utils/, and tests/ per plan.md
- [x] T002 [P] Create the browser entry module in src/app/App.js and the base stylesheet in src/styles/app.css
- [x] T003 [P] Create the shared task validation utility in src/utils/taskValidation.js

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Build the minimal front-end state and reusable UI components that all task actions depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Create the in-memory task state store in src/app/state/taskStore.js
- [x] T005 [P] Implement the task input form in src/app/components/TaskInputForm.js
- [x] T006 [P] Implement the task list container in src/app/components/TaskList.js
- [x] T007 [P] Implement the task row component in src/app/components/TaskItem.js
- [x] T008 Wire the app shell to the state store and render path in src/app/App.js

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Add a valid task immediately (Priority: P1) 🎯 MVP

**Goal**: Allow a user to add a task without reloading the page.

**Independent Test**: Enter a valid task, click Add, and confirm the task appears in the list instantly without a page refresh.

### Tests for User Story 1

- [x] T009 [P] [US1] Add a unit test for valid task submission in tests/unit/taskValidation.test.js
- [x] T010 [P] [US1] Add an integration test for successful Add flow in tests/integration/addTaskFlow.test.js

### Implementation for User Story 1

- [x] T011 [US1] Add the add-task action and in-memory append logic in src/app/state/taskStore.js
- [x] T012 [US1] Connect the form submit handler to the add-task action in src/app/components/TaskInputForm.js
- [x] T013 [US1] Re-render the list immediately after state change in src/app/App.js
- [x] T014 [US1] Ensure the new item appears in TaskList.js without any full-page reload
- [x] T015 [US1] Clear the input after a successful submission in src/app/components/TaskInputForm.js

**Checkpoint**: At this point, User Story 1 should be fully functional and independently testable

---

## Phase 4: User Story 2 - Reject empty or whitespace-only tasks (Priority: P1)

**Goal**: Prevent invalid tasks from being created while preserving a clear user experience.

**Independent Test**: Submit empty and whitespace-only input and confirm no new task is created and a validation message is shown.

### Tests for User Story 2

- [x] T016 [P] [US2] Add validation tests for empty and whitespace-only strings in tests/unit/taskValidation.test.js
- [x] T017 [P] [US2] Add an integration test for invalid task submission in tests/integration/addTaskFlow.test.js

### Implementation for User Story 2

- [x] T018 [US2] Update src/utils/taskValidation.js to reject empty and whitespace-only values
- [x] T019 [US2] Surface the validation error in the form UI in src/app/components/TaskInputForm.js
- [x] T020 [US2] Prevent mutation of task state when validation fails in src/app/App.js
- [x] T021 [US2] Preserve the current list unchanged when invalid input is submitted in src/app/components/TaskList.js

**Checkpoint**: At this point, both user stories should work independently and the primary flow is protected from invalid submissions

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, documentation, and quality checks across the feature

- [x] T022 [P] Run the quickstart validation scenarios in specs/001-add-tasks/quickstart.md and confirm expected outcomes
- [x] T023 [P] Update the feature documentation in specs/001-add-tasks/quickstart.md to reflect final behavior and edge cases
- [x] T024 [P] Review app accessibility and focus states in src/app/components/TaskInputForm.js and src/app/components/TaskList.js
- [x] T025 [P] Run a final UI regression check for successful add and invalid input flows in tests/integration/addTaskFlow.test.js
- [x] T026 Document final assumptions and known limitations in specs/001-add-tasks/spec.md and specs/001-add-tasks/plan.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3 and 4)**: Depend on Foundational completion and can proceed in parallel if team capacity allows
- **Polish (Phase 5)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (Add valid task immediately)**: Starts after Foundational completion and is the primary MVP
- **User Story 2 (Reject empty or whitespace-only tasks)**: Starts after Foundational completion and is a validation requirement for the same feature

### Parallel Opportunities

- T002 and T003 can run in parallel
- T005, T006, and T007 can run in parallel
- T009 and T010 can run in parallel for User Story 1
- T016 and T017 can run in parallel for User Story 2
- T022 through T026 can run in parallel after the main implementation is stable

---

## Parallel Example: User Story 1

```bash
Task: "Add a unit test for valid task submission in tests/unit/taskValidation.test.js"
Task: "Add an integration test for successful Add flow in tests/integration/addTaskFlow.test.js"
Task: "Create the add-task action and in-memory append logic in src/app/state/taskStore.js"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate the primary flow independently
5. Move to validation and polish only after the core behavior works consistently

### Incremental Delivery

1. Complete Setup + Foundational
2. Deliver User Story 1 for immediate add functionality
3. Deliver User Story 2 for invalid input prevention
4. Run final validation and documentation cleanup

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Developer A focuses on User Story 1 UI and state handling
3. Developer B focuses on User Story 2 validation and error handling
4. Shared review covers documentation and final regression checks

---

## Notes

- [P] tasks = different files and no shared dependency chain
- [Story] labels map tasks to the correct user story for traceability
- Each story is independently testable and can be demonstrated separately
- Validation tests should fail before implementation to confirm the requirement is covered
- The implementation intentionally avoids backend or persistence work because the project explicitly excludes them

## Phase 6: Convergence

- [ ] T027 Add and run an automated UI/component regression test for successful add, immediate list updates without reload, input reset, and invalid submission feedback per plan: testing and T025 (missing)
