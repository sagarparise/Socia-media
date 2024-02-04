import {configureStore} from '@reduxjs/toolkit';
import postReducer from '../Slices/PostsSlice.jsx'
const store = configureStore({
  reducer:{
    posts: postReducer,
  }
})
export default store;
