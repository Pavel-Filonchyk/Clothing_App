import stylesReducer from './stylesReducer'
import getListReducer from './getListReducer'

export const rootReducer = () => {
    return { stylesReducer, getListReducer }
}