import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "./user"
import feedSlicer from "./feed"

const store = configureStore({
    reducer:{
        user:userSlicer,
        feed:feedSlicer
    }
})

export default store;