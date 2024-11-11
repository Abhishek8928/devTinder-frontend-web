import { createSlice } from "@reduxjs/toolkit";



const notificationSlice = createSlice({
    name:"notification",
    initialState:null,
    reducers:{
        addNotificationList:(state,action) => action.payload,
        removeNotificationList:(state,action) => null
    }
})


export const {addNotificationList,removeNotificationList} = notificationSlice.actions;
export default notificationSlice.reducer;




