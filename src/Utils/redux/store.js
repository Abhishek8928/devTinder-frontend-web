import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "./user";
import feedSlicer from "./feed";
import connectionSlice from "./connection";
import requestSlice from "./request" ;
import notificationSlice from "./notification" 

const store = configureStore({
    reducer: {
        user: userSlicer,
        feed: feedSlicer,
        connection: connectionSlice,
        request: requestSlice,
        notification:notificationSlice
    }
})

export default store;