const initialState = {
   info: []
}

const infoReducer = (state = initialState, action) => {
   switch (action.type){ 
      case 'CHANGE_INFO':
         if (action.payload?.move === 'add') {
            return {
               ...state,
               info: [...state.info, action.payload?.page]
            }
         }else if (action.payload?.move === 'delete'){
            return {
               ...state,
               info: state.info.slice(0, -1)
            }
         }else{
            return {
               ...state,
               info: [action.payload.page]
            }
         }
         
      default: 
      return state
   }
}

export default infoReducer