import { createSlice } from '@reduxjs/toolkit';
import { COMMENTS } from '../../app/shared/COMMENTS';


//declare initialState constant
const initialState = {
    commentsArray: COMMENTS
};

//slice of a global state data.
//this function requires and object as an argument and return an object as return value.
const commentsSlice = createSlice({
    name: 'comments',
    initialState
});


//will have a method on it that is a reducer for the entire comments slice of the state
//slice reducer
//we need to export it as a const so that we can import it into the redux store later. 
export const commentsReducer = commentsSlice.reducer;


//this selector already has a parameter of campsiteid..
//We need to have a function return a function, we will have this function keep the parameter of campsiteid.
//but we'll update it into a higher order function, that returns another function with the parameter of state. 
//this prepares it to be passed into the useSelector hook as a callback function. Such that the inner function has access to both
//campsiteid and state parameters. 
//we'll make sure to make the comments Array from the redux state.commentsSlice instead of from the hard-coded local file. 
export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
}