import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
    filter: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilterValue(state, action) {
            //назва такаж як і назва функції генератору action-a
            state.filter = action.payload; //логіка обработки actiona reducer-ом, коли діспатчим action на store
        },
    },
});

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
