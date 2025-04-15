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

export const resetRegister = () => {
    return {
        type: 'RESET_REGISTER'
    } 
}

