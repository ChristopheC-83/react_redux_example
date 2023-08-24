import { configureStore } from "@reduxjs/toolkit";
import reducer_file from "./features/reducer_file"

export const store = configureStore({
    reducer:{
        reducer_file,
        //nom des autres fichiers reducer

    }

})