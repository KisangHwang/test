import { createSlice } from "@reduxjs/toolkit";

interface CheckState{
  check: number[]
}

const initialState: CheckState = {
  check: []
};

export const checkSlice = createSlice({
  name: 'check',
  initialState,
  reducers: {
    addCheck(state, action){
        state.check = action.payload;
    },
    removeCheck(state, action){
        state.check = state.check.filter(check => check !== action.payload);
    }
  },
  extraReducers: (builder) => {}
});

export const {addCheck, removeCheck} = checkSlice.actions; 
export default checkSlice.reducer;