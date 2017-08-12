import { createStore,combineReducers } from 'redux'

const counterState = {
    counter : 1,
    message : 'hello counter state'
}


const reducer = (state = counterState,action) => {

    switch (action.type) {
        case 'COUNTER':
            return  { ...state , counter : state.counter + action.payload.count }                                           
    }   

    return state
}


export default createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   
)