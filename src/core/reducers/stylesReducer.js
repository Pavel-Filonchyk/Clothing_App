const initialState = {
    namePage: 'main'
}

const stylesReducer = (state = initialState, action) => {
    switch (action.type){ 
        case 'CHANGE_NAME_PAGE':
            return {
                ...state,
                namePage: action.payload
            }
        default: 
        return state;  
    }
}

export default stylesReducer