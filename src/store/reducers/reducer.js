import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAutneticated : null,
    allUsers : [],
    loading : false,
    currentUser : null,
    authFailMessage : '',
    authuccess : false,
    currentUsersList : [],
    adminCreation : false
};

const reducer = (state = initialState,action) =>{

}

export default reducer;