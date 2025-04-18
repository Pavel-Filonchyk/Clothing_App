const initialState = {
   dataUser: null,
   dataAccount: null,
   register: {},
   auth: null,
   currency: 'rub',
   deleteAccount: {},
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
      case 'GET_DATA_ACCOUNT':
         return {
            ...state,
            auth: action.payload
         }
      case 'GET_DATA_ACCOUNT_SUCCESS':
         return {
            ...state,
            dataUser: action.payload
         }
      case 'CHANGE_ACCOUNT':
         return {
            ...state,
            dataAccount: action.payload
         }
      case 'CHANGE_ACCOUNT_SUCCESS':
         return {
            ...state,
            statusRegister: action.payload
         }
      case 'RESET_REGISTER':
         return {
            ...state,
            statusRegister: null
         }
      case 'CHANGE_CURRENCY':
         return {
            ...state,
            currency: action.payload
         }
      case 'CHANGE_CURRENCY_SUCCESS':
         console.log(action.payload)
         return {
            ...state,
            //currency: action.payload
         }
      case 'DELETE_ACCOUNT':
         return {
            ...state,
            deleteAccount: action.payload
         }
      default: 
      return state;  
   }
}

export default loginReducer