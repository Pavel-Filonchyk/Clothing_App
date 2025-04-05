export const getCatalog = () => {
    return {
        type: 'GET_CATALOG',
    } 
}
export const GET_CATALOG = 'GET_CATALOG'

export const getCatalogSuccess = (data) => {
    return {
        type: 'GET_CATALOG_SUCCESS',
        payload: data 
    } 
}

export const getSubcatalog = (data) => {
    return {
        type: 'GET_SUBCATALOG',
        payload: data 
    } 
}

export const getList = (data) => {
    return {
        type: 'GET_LIST',
        payload: data 
    } 
}