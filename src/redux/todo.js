import * as ActionTypes from './ActionTypes'

const initialState = {
  todo: [
    { activity: 'First ToDo', complete: false, id: 0 },
    { activity: 'Second ToDo', complete: true, id: 1},
  ],
}

export const ToDo = (state = initialState, action) => {
  switch (action.type) {
    // TASK: Change the cases to match with the code
    case ActionTypes.ADD_TODO:
      const todo = action.payload
      todo.id = state.todo.length
      return { ...state, todo: state.todo.concat(todo) }

    case ActionTypes.TOGGLE_COMPLETE:
      let updatedTodo = [...state.todo]
      updatedTodo[action.payload].complete = !updatedTodo[action.payload].complete
      return { ...state, todo: updatedTodo }

    case ActionTypes.DELETE_TASKS:
      return { ...state, todo: state.todo.filter((task) => !task.complete) }

    case ActionTypes.CLEAR_TASKS:
      // TASK implement the final action type
      const newTodo = [];
      return {...state, todo: newTodo}

    case ActionTypes.REMOVE_SINGLE_TASK:
      const singleTask = state.todo.filter(task => task.id !== action.payload) 
      return {...state , todo: singleTask}

    default:
      return state
  }
}
