import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addRequestList: (state, action) => action.payload,
    removeRequestList: (state, action) => null,
    removeRequest: (state, action) => {
      return state.filter((request) => {
        return request?._id !== action?.payload;
      });
    },
  },
});

export const { addRequestList, removeRequest, removeRequestList } =
  requestSlice.actions;

export default requestSlice.reducer;
