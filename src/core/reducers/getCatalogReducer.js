const initialState = {
    catalog: [],
    subcatalog: [],
    list: [],
}

const getCatalogReducer = (state = initialState, action) => {
    switch (action.type){ 
        case 'GET_CATALOG_SUCCESS':
            return {
                ...state,
                catalog: action.payload
            }
        case 'GET_SUBCATALOG':
        return {
            ...state,
            subcatalog: action.payload
        }
        case 'GET_LIST':
        return {
            ...state,
            list: action.payload
        }
        default: 
        return state;  
    }
}

export default getCatalogReducer