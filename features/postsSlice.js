import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    post: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.post = action.payload
    },
    removePost: state => {
      state.post = null;
    }
  },
});

export const { addPost, removePost } = postSlice.actions;
export const selectpost = state => state.post.post;

export default postSlice.reducer;