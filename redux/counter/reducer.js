const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  exampleData: [],
  error: null,
}

export default function countries(state = initialState, action){
  switch(action.type) {
    case "INCREMENT":
      return {...state, count: state.count + 1}
    
    case "DECREMENT":
      return {...state, count: state.count - 1}

    case "RESET":
      return {...state, count: initialState.count}

    default: 
      return state
  }
}