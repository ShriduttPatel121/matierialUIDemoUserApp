import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAutneticated : false,
    authFailMessage : '',
    authuccess : false,

    loading : false,

    Employees : [],
    currentEmployee : null,

    newEmployeeCreationSucces : false,
    errorNewEmployeeCreationMsg : '',

    EnableEditMode : false,
    showDetailsMode : false,
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
        
        case actionTypes.EDIT_MODE_ENABLE:
            return {
                ...state,
                EnableEditMode : true
            }
        case actionTypes.EDIT_MODE_DISABLE:
            return {
                ...state,
                EnableEditMode : false
            }

        case actionTypes.EDIT_A_EMPLOYEE_START:
            return {
                ...state,
                loading : true
            }
        case actionTypes.EDIT_A_EMPLOYEE_SUCCESS:
            let copiedList = [...state.Employees];
            copiedList[action.id] = {...action.editEmp};
            return {
                ...state,
                loading : false,
                Employees : copiedList
            }
        case actionTypes.EDIT_A_EMPLOYEE_FAIL:
            return {
                ...state,
                loading : false
            }
        
        case actionTypes.SHOW_DETAILS_ENABLE:
            return {
                ...state,
                showDetailsMode : true
            }
        
        case actionTypes.SHOW_DETAILS_DISABLE:
            return {
                ...state,
                showDetailsMode : false
            }
        default:
            return state;
    }
}

export default reducer;