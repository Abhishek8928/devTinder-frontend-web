import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addCurrentUser:function(state , action){
            return action.payload
        },
        logoutUser:function(state){
            return null
        }
    }
})


export const { addCurrentUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;