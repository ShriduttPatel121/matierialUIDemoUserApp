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

//to enable edit mode
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

// to enable show details mode

export const showDetailsModeEnable = () => {
    return {
        type : actionTypes.SHOW_DETAILS_ENABLE
    }
}

export const showDetailsDisable = () => {
    return {
        type : actionTypes.SHOW_DETAILS_DISABLE
    }
}

export const dummyAuth = () => {
    return {
        type : actionTypes.AUTH_SUCCESS
    }
}