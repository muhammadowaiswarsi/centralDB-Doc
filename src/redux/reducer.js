import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  docs: [],
  status: [],
};

export const counterSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setReadmeData: (state, action) => {
      state.docs = action.payload?.docs;
      state.status = action.payload?.status;
    },
  },
});

export const { setReadmeData } = counterSlice.actions;

export default counterSlice.reducer;
