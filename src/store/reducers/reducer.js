import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAutneticated : false,
    authFailMessage : '',
    authuccess : false,

    loading : false,

    Employees : [],
    currentEmployee : null,

    newEmployeeCreationSucces : false,
    errorNewEmployeeCreationMsg : ''
};

const reducer = (state = initialState,action) =>{
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading : true
            };
        
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                loading : false,
                currentEmployee : action.currentEmployee
            }
        
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                loading : false,
            }
        case actionTypes.ADD_NEW_EMPLOYEE_START:
            return {
                ...state,
                loading : true
            }
        
        case actionTypes.ADD_NEW_EMPLOYEE_SUCCESS:
            
            const newList = state.Employees.concat(action.newEmp);
            return {
                ...state,
                loading : false,
                Employees : newList
            }
        case actionTypes.ADD_NEW_EMPLOYEE_FAIL:
            return {
                ...state,
                loading : false,
                errorNewEmployeeCreationMsg : action.errorMsg
            }
        default:
            return state;
    }
}

export default reducer;