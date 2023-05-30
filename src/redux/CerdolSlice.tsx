import { createSlice } from "@reduxjs/toolkit";

interface ICerdolState {
    cerdol : number;
}

const initialState : ICerdolState = {
    cerdol : 2
}

const cerdolSlice = createSlice({
    name : 'cerdol',
    initialState,
    reducers : {
        incrementCerdol : (state) => {
            return {
                ...state,
                cerdol : state.cerdol + 10
            }
        }
    }
});

export const {incrementCerdol} = cerdolSlice.actions;
export default cerdolSlice.reducer;