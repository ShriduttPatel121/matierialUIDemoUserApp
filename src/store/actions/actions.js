//modify it when this app is integrated with api.....
import * as actionTypes from './actionTypes';

export const addEmpWithoutBackend = (empData) => {
    return {
        type : actionTypes.ADD_NEW_EMPLOYEE_SUCCESS, //modify it when this app is integrated with api.....
        newEmp : empData
    }
}