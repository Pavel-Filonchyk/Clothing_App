const initialState = {
   info: 'main'
}

const infoReducer = (state = initialState, action) => {
   switch (action.type){ 
      case 'CHANGE_INFO':
         return {
            ...state,
            info: action.payload
         }
      default: 
      return state
   }
}

export default infoReducer