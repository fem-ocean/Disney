import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    photo: "",
};

const userSlice = createSlice({
    name: "user", initialState,
    reducers: {
        //This is saying when the user logs in, remember all this stuffs(state.name, state.email, state.photo) 
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },

        // when i logo out set these variables to null
        setSignOutState: state => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    },
});

export  const { setUserLoginDetails, setSignOutState } = userSlice.actions;

//With these, we can get access to the username, email and photo in any of our file.
export const selectUserName = state => state.user.name;
export const selectUserEmail = state => state.user.email;
export const selectUserPhoto = state => state.user.photo;

export default userSlice.reducer;