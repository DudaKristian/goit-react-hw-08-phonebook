import { createSlice } from "@reduxjs/toolkit"
import { contactsApi } from "../features/phoneBookAPI"


const initialState = {
    name: "",
    email: "",
    token: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getCurrentSuccess: (state, { payload }) => {
            state.name = payload.name;
            state.email = payload.email;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            contactsApi.endpoints.logInUser.matchFulfilled,
            (state, { payload }) => {
            const { user, token } = payload;

            state.name = user.name;
            state.email = user.email;
            state.token = token;
        },
        )
        builder.addMatcher(
            contactsApi.endpoints.getCurrentUser.matchFulfilled,
            (state, { payload }) => {
            state.name = payload.name;
            state.email = payload.email;
        },
        )
    },
    

    
});

export const { loginSuccess, getCurrentSuccess } = userSlice.actions;

export const ReducerUser = userSlice.reducer;

export const getUser = state => state.user