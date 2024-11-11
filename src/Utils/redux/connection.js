

import { createSlice } from "@reduxjs/toolkit";


const connectionSlice = createSlice({
    name:"connection",
    initialState:null,
    reducers:{
        addConnectionList : (state ,action) => action.payload,

        removeConnectionList : (state , action) => null
        
    }
})


export const {addConnectionList,removeConnectionList} = connectionSlice.actions;

export default connectionSlice.reducer;