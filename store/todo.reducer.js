const initialState = {todos: [], todo: {}}

export const addTodoAction = todo => ({type: "ADD_TODO", payload: todo})

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {...state, todos: [...state.todos, action.payload]}
      case 'TOGGLE_TODE':
        return {...state, todos: state.todos.map(
            todo => (todo.id === action.payload) ? {...todo, complete: !todo.complete} 
                                                : todo)}
      case 'DELETE_TODE':
        return {...state, todos: []}
      default:
        return state
    }
  }
export default todoReducer