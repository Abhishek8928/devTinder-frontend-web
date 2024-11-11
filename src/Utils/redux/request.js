import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addRequestList: (state, action) => action.payload,
    removeRequestList: (state, action) => null,
    removeRequest: (state, action) => {
      const pendingRequest = state.filter((request) => {
        request._id != action?.payload;
      });
      return pendingRequest;
    },
  },
});

export const { addRequestList, removeRequest, removeRequestList } = requestSlice.actions;

export default requestSlice.reducer;
