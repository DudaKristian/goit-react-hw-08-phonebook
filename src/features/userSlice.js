import { createSlice } from "@reduxjs/toolkit"
import { contactsApi } from "../features/phoneBookAPI"


const initialState = {
    name: "",
    email: "",
    token: "",
    isLogedIn : false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getCurrentSuccess: (state, { payload }) => {
            state.name = payload.name;
            state.email = payload.email;
            state.isLogedIn = true;
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
            state.isLogedIn = true;
        },
        )
        builder.addMatcher(
            contactsApi.endpoints.getCurrentUser.matchFulfilled,
            (state, { payload }) => {
            state.name = payload.name;
            state.email = payload.email;
            state.isLogedIn = true;
        },
        )
        builder.addMatcher(
            contactsApi.endpoints.getLogout.matchFulfilled,
            state => {
            state.email = initialState.email;
            state.name = initialState.name;
            state.token = initialState.token;
            state.isLogedIn = initialState.isLogedIn;
    });
    },
    

    
});

export const { loginSuccess, getCurrentSuccess } = userSlice.actions;

export const ReducerUser = userSlice.reducer;

export const getUser = state => state.user