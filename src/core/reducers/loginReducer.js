const initialState = {
   register: {},
   statusRegister: null
}

const loginReducer = (state = initialState, action) => {
   switch (action.type){ 
      case 'SEND_REGISTER':
         return {
               ...state,
            register: action.payload
         }
      case 'SEND_REGISTER_SUCCESS':
         return {
               ...state,
            statusRegister: action.payload
         }
      case 'RESET_REGISTER':
         return {
               ...state,
            statusRegister: null
         }

       default: 
       return state;  
   }
}

export default loginReducer