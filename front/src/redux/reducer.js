import {createSlice } from '@reduxjs/toolkit';


const initialState = {
    userActive: {},
    userAppointments: [],
};

export const userSlice = createSlice({
    name: 'userData',
    initialState: initialState,
    reducers: {
        setUserActive: (state, action) => {
            state.userActive = action.payload;
        },
        setUserAppointments: (state, action) => {
            state.userAppointments = action.payload;
        },
        removerUserActive: (state) => {
            state.userActive = {};
        },
        cancelAppointmentAction: (state, action) => {
            state.userAppointments = state.userAppointments.map((appointment) => {
                if(appointment.id === action.payload){
                    return {...appointment, status: "CANCELLED"}
                }
                return appointment;
            });
    },
    }
});

export const { setUserActive, setUserAppointments, removerUserActive, cancelAppointmentAction } = userSlice.actions;