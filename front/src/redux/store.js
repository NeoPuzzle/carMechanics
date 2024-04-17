import { consfigureStore } from '@reduxjs/toolkit';
import {userSlice} from './reducer.js';
import {appointmentsSlice} from './reducer.js';

const store = consfigureStore({
    reducer: {
        user: userSlice.reducer,
        appointments: appointmentsSlice.reducer,
    }

});

export default store;