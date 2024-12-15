import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    text: ""
}

const InputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setInput: (state, action) =>{
            state.text = action.payload
        }
    }
})

export const { setInput } = InputSlice.actions;
export default InputSlice.reducer;