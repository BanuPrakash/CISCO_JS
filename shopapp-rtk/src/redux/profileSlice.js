import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   avatar: 'dummy.png',
   name: 'George'
}
const profileSlice = createSlice({
    name :'profile',
    initialState,
    reducers: {}
})

export const profileReducer = profileSlice.reducer;