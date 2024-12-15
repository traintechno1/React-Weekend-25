import { configureStore } from "@reduxjs/toolkit";
import InputSlice from "../Slices/inputSlice";
import CounterSlice from "../slices/counterSlice";

let store = configureStore({
    reducer: {
        input: InputSlice,
        counter: CounterSlice
    }
});

export default store;