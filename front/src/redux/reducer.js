import {createSlice } from '@reduxjs/toolkit';


const initialState = {
    user: "",
    userAppointments: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setUserAppointments: (state, action) => {
            state.userAppointments = action.payload;
        },
    },
});


export const { setUser, setUserAppointments } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectUserAppointments = (state) => state.user.userAppointments;

export default userSlice;