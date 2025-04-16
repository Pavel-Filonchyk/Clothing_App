export const sendRegister = (data) => {
   return {
       type: 'SEND_REGISTER',
       payload: data 
   } 
}
export const SEND_REGISTER = 'SEND_REGISTER'
export const sendRegisterSuccess = (data) => {
   return {
       type: 'SEND_REGISTER_SUCCESS',
       payload: data 
   } 
}

export const getDataAccount = () => {
    return {
        type: 'GET_DATA_ACCOUNT'
    } 
}
export const GET_DATA_ACCOUNT = 'GET_DATA_ACCOUNT'
export const getDataAccountSuccess = (data) => {
    return {
        type: 'GET_DATA_ACCOUNT_SUCCESS',
        payload: data 
    } 
}

export const changeAccount = (data) => {
    return {
        type: 'CHANGE_ACCOUNT',
        payload: data 
    } 
}
export const CHANGE_ACCOUNT = 'CHANGE_ACCOUNT'
export const changeAccountSuccess = (data) => {
    return {
        type: 'CHANGE_ACCOUNT_SUCCESS',
        payload: data 
    } 
}

export const resetRegister = () => {
    return {
        type: 'RESET_REGISTER'
    } 
}
export const changeCurrency = (data) => {
    return {
        type: 'CHANGE_CURRENCY',
        payload: data 
    } 
}
export const CHANGE_CURRENCY = 'CHANGE_CURRENCY'
export const changeCurrencySuccess = (data) => {
    return {
        type: 'CHANGE_CURRENCY_SUCCESS',
        payload: data 
    } 
}

export const deleteAccount = (data) => {
    return {
        type: 'DELETE_ACCOUNT',
        payload: data 
    } 
}
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT'


