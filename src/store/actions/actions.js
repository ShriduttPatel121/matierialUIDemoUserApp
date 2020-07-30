//modify it when this app is integrated with api.....
import * as actionTypes from './actionTypes';

export const addEmpWithoutBackend = (empData) => {
    return {
        type : actionTypes.ADD_NEW_EMPLOYEE_SUCCESS, //modify it when this app is integrated with api.....
        newEmp : empData
    }
}

export const editEmpWithoutBackEnd = (empData, id) => {
    return {
        type : actionTypes.EDIT_A_EMPLOYEE_SUCCESS, //modify it when this app is integrated with api.....
        editEmp : empData,
        id : id
    }
}

export const editModeEnable = () => {
    return {
        type : actionTypes.EDIT_MODE_ENABLE
    }
}

export const editModeDisable = () => {
    return {
        type : actionTypes.EDIT_MODE_DISABLE
    }
}