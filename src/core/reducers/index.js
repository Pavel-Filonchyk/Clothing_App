import stylesReducer from './stylesReducer'
import getCatalogReducer from './getCatalogReducer'
import infoReducer from './infoReducer'
import loginReducer from './loginReducer'

export const rootReducer = () => {
    return { 
        stylesReducer, 
        getCatalogReducer, 
        infoReducer,
        loginReducer
    }
}