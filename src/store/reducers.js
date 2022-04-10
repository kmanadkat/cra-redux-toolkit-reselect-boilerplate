import { combineReducers } from 'redux';
import { name as score, reducer as scoreReducer } from '../components/Counter/redux/slice';


const createRootReducer = () => {
    return combineReducers({
        [score]: scoreReducer,
    })
}

export default createRootReducer