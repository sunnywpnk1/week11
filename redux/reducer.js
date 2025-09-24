import {combineReducers} from '@reduxjs/toolkit';
import todosReducer from './todos/todosSlicer';

const rootReducer = combineReducers({
    todos:todosReducer,
    // umgt:umgtReducer
})

export default rootReducer;


// import { combineReducers } from "@reduxjs/toolkit";
// import todosReducer from './todos/todosSlicer'
// const rootReducer = combineReducers({
//     todos:todosReducer
// })
 
// export default rootReducer