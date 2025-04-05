import stylesReducer from './stylesReducer'
import getCatalogReducer from './getCatalogReducer'
import infoReducer from './infoReducer'

export const rootReducer = () => {
    return { stylesReducer, getCatalogReducer, infoReducer }
}