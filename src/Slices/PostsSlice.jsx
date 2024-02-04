import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchposts = createAsyncThunk('posts/fetchposts', async ()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
})

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: '',
    error: null
  },
  reducers:{},
  extraReducers: (builder)=> {
    builder.addCase(fetchposts.pending, (state)=>{
      state.status = 'loading...'
    })
    .addCase(fetchposts.fulfilled, (state, action)=>{
      state.status = 'succeeded';
      state.posts = action.payload;
    })
    .addCase(fetchposts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  }
})

export default postSlice.reducer;